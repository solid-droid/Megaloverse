import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare const VoxeetSDK;
declare const attachStream;
declare const maps;

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
    iframes : [],
    label: [],
    space: [],
  }

  private readonly Observable_userList = new BehaviorSubject(undefined);
  getuserList = this.Observable_userList.asObservable();

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router,
  ) {  }

  getMap(key){
    let _content:any = {
      images : [],
      iframes : [],
      label: [],
      space: [],
    };
    if(key == '/'){
      this.router.navigate([Object.keys(maps)[0]]);
    } else {
      _content = maps[key.split('/')[1]];
      if(!_content){
        alert('No map found');
        this.router.navigate([Object.keys(maps)[0]]);
      }
    }
   _content.images.forEach(x => {
     x.url = this.getSafeUrl(x.url);
   });
    _content.iframes.forEach(x => {
      x.url = this.getSafeUrl(x.url);
    });
    _content.space.forEach(x => {
      x.code = this.getSafeUrl(x.code);
      x.demo = this.getSafeUrl(x.demo);
      x.team = this.getSafeUrl(x.team);
    });

    this.content = _content;

  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}

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
