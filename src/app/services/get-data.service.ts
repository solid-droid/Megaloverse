import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare const VoxeetSDK;
declare const attachStream;

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  userList = [];
  masterList:any = {};
  localUserObj:any;
  localUser = null;
  userLock = false;
  mic = false;
  cam = true;
  content = {
    images : [],
    ifames : [],
    videos : [],
    text: [],
    space: [],
  }

  private readonly Observable_userList = new BehaviorSubject(undefined);
  getuserList = this.Observable_userList.asObservable();

  constructor() { }

  async initDolbyIO() {
    await new Promise(r => setTimeout(r, 500));
    let name = prompt("Please enter your user-name or create a new one.");
  if (name) {
    this.localUser = name;
    const consumerKey = '4f872ZvovhxGINUicNcqNg==';
    const consumerSecret = 'K9QoiiENFkjVg8Pc6VmWAUuQjk8YyPnXxfRD9KL1lbw=';
    VoxeetSDK.initialize(consumerKey, consumerSecret);
    await VoxeetSDK.session.open({ name });
    this.initCallbacks();
    this.joinGeneralRoom();
  }
    
  }

  setLocalCords(x,y){
    this.masterList[this.localUserObj.id].x = x;
    this.masterList[this.localUserObj.id].y = y;
  }

  initCallbacks(){
    VoxeetSDK.conference.on('streamAdded', async (participant, stream) => {
      if (stream.getVideoTracks().length) {
        if(!this.localUserObj){
          this.localUserObj = {name :  participant.info.name, stream, id: participant.id, talking: false};
          this.masterList[participant.id] = 
          {
            name : participant.info.name, 
            stream, 
            id: participant.id, 
            talking: false, 
            mic : false,
            cam : true,
            x: '500px',
            y: '500px',
            local: true
          };
        }
        const videoNode = document.getElementById(`userBox_local`);  
        attachStream(videoNode, stream); 
        await new Promise(r => setTimeout(r, 500));
        this.sendMessage(JSON.stringify({type: 'join'}));
      }
    });

    VoxeetSDK.conference.on('streamUpdated', async (participant, stream) => {
        if(this.masterList[participant.id]){
          this.masterList[participant.id].stream = stream;
          this.masterList[participant.id].cam = true;
        } else {
          this.masterList[participant.id] = 
          {
            name : participant.info.name, 
            stream, 
            id: participant.id, 
            talking: false, 
            mic : false,
            cam : true,
            x: '500px',
            y: '500px'
          }
        }
        if(participant.id !== this.localUserObj.id){
          this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
          await new Promise(r => setTimeout(r, 500));
          console.log('attaching');
          const videoNode = document.getElementById(`userBox_${participant.id}`);  
          attachStream(videoNode, stream);
        }
    });

    VoxeetSDK.conference.on('streamRemoved', (participant, stream) => {
      this.masterList[participant.id].cam = false;
      this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
    });

    const messageCallBack = {
      move : async (id, message) => {
        while(!this.masterList[id]){
          await new Promise(r => setTimeout(r, 100));
        }
        this.masterList[id].x = message.x;
        this.masterList[id].y = message.y;
        this.userList = Object.values(this.masterList);
        this.updateAudioStreams();
      },
      join: (id, message) => {
        this.sendMessage(JSON.stringify({
          type: 'move',
          x:  this.masterList[this.localUserObj.id].x,
          y:  this.masterList[this.localUserObj.id].y,
        }));
      },
      camON: (id, message) => {
        this.masterList[id].cam = true;
        this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
      }
    }

    VoxeetSDK.command.on('received', (participant, message) => {
      const id = participant.id;
      const _message = JSON.parse(message);
      messageCallBack[_message.type](id, _message);
    });
    
  }

  async joinGeneralRoom(roomName = 'general1jjj') {
    VoxeetSDK.conference.create({ alias: roomName, params: { dolbyVoice: true } })
    .then((conference) => VoxeetSDK.conference.join(conference, {constraints: { audio: false, video: true }}))
                          .then(() =>{
                            this.checkTalking();
                          })
                          .catch((e) => console.log('Something wrong happened : ' + e));
  }

checkTalking(){
    setInterval(() => {
      let participants = VoxeetSDK.conference.participants;
      for (let participant of participants) {
        VoxeetSDK.conference.isSpeaking( VoxeetSDK.conference.participants.get(participant[0]),
          isSpeaking => {
            const entry = this.userList.find(x => x.id === participant[0])
            if(entry){
              this.userList.find(x => x.id === participant[0]).talking = isSpeaking;  
              this.masterList[participant[0]].talking = isSpeaking;
            } else {
              this.userList = this.userList.filter(x => x.id !== participant[0]);
            }
        });
      }
    }, 500);

  }

updateAudioStreams(){
  const localX = this.masterList[this.localUserObj.id].x;
  const localY = this.masterList[this.localUserObj.id].y;

  const getFloat = (x:string) => parseFloat(x.split('px')[0]);
  Object.values(this.masterList).forEach((value:any) => {
    if(value.id !== this.localUserObj.id){
      if(Math.abs(getFloat(localX) - getFloat(value.x) )> 400 && Math.abs(getFloat(localY) - getFloat(value.y)) > 400){
        VoxeetSDK.conference.stopAudio(this.getParticipant(value.id));
      } else {
        VoxeetSDK.conference.startAudio(this.getParticipant(value.id));
      }
    }
  });
}

getParticipant(id:string){
  let participants = VoxeetSDK.conference.participants;
  for (let participant of participants) {
    if(participant[0] === id){
      return participant[1];
    }
  }
}

turnOnMic(){
  VoxeetSDK.conference.startAudio(VoxeetSDK.session.participant);
}

turnOffMic(){
  VoxeetSDK.conference.stopAudio(VoxeetSDK.session.participant);
}

turnOnCam(){
  VoxeetSDK.conference.startVideo(VoxeetSDK.session.participant);
}

turnOffCam(){
  VoxeetSDK.conference.stopVideo(VoxeetSDK.session.participant);
}

sendMessage(message){
  VoxeetSDK.command.send(message);
}

}
