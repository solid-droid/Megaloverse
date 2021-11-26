import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import VoxeetSDK from '@voxeet/voxeet-web-sdk';

declare const VoxeetSDK;

declare const attachStream;

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url = 'https://naughty-poitras-5d647a.netlify.app/.netlify/functions/api';
  userList:any = [];
  masterList:any = {};
  localUserObj:any;
  localUser = null;
  userLock = false;
  inConference = false;
  talking = false;
  mic = true;
  cam = true;
  content = {
    images : [],
    iframes : [],
    label: [],
    borders: [],
    likeBtn: [],
    likeCounter: [],
    urls:[]
  }
  life = null;
  validateLife = null;
  prevkey = '/';
  currentMap= null;

  private readonly Observable_userList = new BehaviorSubject(undefined);
  getuserList = this.Observable_userList.asObservable();

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router,
  ) {  }

  async getMap(key){
    let _content:any = {
      images : [],
      iframes : [],
      label: [],
      borders: [],
      likeBtn: [],
      likeCounter: [],
      urls:[]
    };
    if(key == '/'){
      this.router.navigate(['home']);
    } else {
      const map =await (await fetch(this.url+key)).json(); 
      this.currentMap = JSON.parse(JSON.stringify(map));  
      _content = map?.data[0]?.data || null;
      this.loadconent(_content,key);
    }
  }

  async loadconent(_content,key){
    if(!_content){
      alert('No map found');
    }
   if(this.prevkey !== key){
      this.prevkey = key;
      this.exitandjoin(key);
    }
          
    _content.images.forEach(x => {
       x.url = this.getSafeUrl(x.url);
    });
          
    _content.iframes.forEach(x => {
      x.url = this.getSafeUrl(x.url);
    });
    this.content = _content;
  }

  async exitandjoin(key){
    while(!this.localUser){
      await new Promise(r => setTimeout(r, 100));
    }
    if(this.inConference){
      VoxeetSDK.conference.leave();
      this.sendMessage(JSON.stringify({type: 'leave'}));
    }
    this.inConference = false;
    await new Promise(r => setTimeout(r, 500));
    this.joinRoom(key);
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}

  async updateLocalSpatialAudio(){
    const localNode:any = Object.values(this.masterList).find((x:any) => x.id === this.localUserObj.id);
    const localX =  parseInt(localNode.x.split('px')[0])/3;
    const localY =  parseInt(localNode.y.split('px')[0])/3;
    Object.values(this.masterList).forEach((item:any) => {
      const x =  parseInt(item.x.split('px')[0])/3 - localX;
      const y =  parseInt(item.y.split('px')[0])/3 - localY;
      VoxeetSDK.conference.setSpatialPosition( this.getParticipant(item.id), {x, y, z: 0 });
    });
  }

  async initDolbyIO() {
    await new Promise(r => setTimeout(r, 500));
    let name = localStorage.getItem('name');
    if(!name){
      name = prompt("Please enter your user-name or create a new one.");
      localStorage.setItem('name',name);
    }
  if (name) {
    // const consumerKey = '4f872ZvovhxGINUicNcqNg==';
    // const consumerSecret = 'K9QoiiENFkjVg8Pc6VmWAUuQjk8YyPnXxfRD9KL1lbw=';
    const consumerKey = 'FFAa8_YAu-8Kz_-0JGLDyw==';
    const consumerSecret = 'YQ0h-GxQGqvAifRUO8SK5TGRCyV7Hd_tzTULNrHUypU=';
    VoxeetSDK.initialize(consumerKey, consumerSecret);
    await VoxeetSDK.session.open({ name });
    this.initCallbacks();
    this.localUser = name;
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
            mic : this.mic,
            cam : this.cam,
            x: '500px',
            y: '500px',
            local: true,
            lastUpdate: performance.now(),
          };
          VoxeetSDK.conference.setSpatialPosition(participant, {
            x: 0,
            y: 0,
            z: 0
        });
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
            mic : true,
            cam : true,
            x: '500px',
            y: '500px',
            lastUpdate: performance.now(),
          }
          VoxeetSDK.conference.setSpatialPosition(participant, {
            x: 0,
            y: 0,
            z: 0
        });
        }
        if(participant.id !== this.localUserObj.id){
          this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
          await new Promise(r => setTimeout(r, 1000));
          const videoNode = document.getElementById(`userBox_${participant.id}`);  
          attachStream(videoNode, stream);
        }
    });

    VoxeetSDK.conference.on('streamRemoved', (participant, stream) => {
      if(this.masterList[participant.id]){
        this.masterList[participant.id].cam = false;
        this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
      }
    });

    const messageCallBack = {
      move : async (id, message,participant) => {
        while(!this.masterList[id]){
          await new Promise(r => setTimeout(r, 100));
        }
        this.masterList[id].x = message.x;
        this.masterList[id].y = message.y;
        const localNode:any = Object.values(this.masterList).find((x:any) => x.id === this.localUserObj.id);
        const localX =  parseInt(localNode.x.split('px')[0])/35;
        const localY =  parseInt(localNode.y.split('px')[0])/3;
        const x =  parseInt(message.x.split('px')[0])/3 - localX;
        const y =  parseInt(message.y.split('px')[0])/3 - localY;
        VoxeetSDK.conference.setSpatialPosition(participant, {
          x,
          y,
          z: 0
        });
        this.userList = Object.values(this.masterList);
        this.updateAudioStreams();
      },
      join: () => {
        this.sendMessage(JSON.stringify({
          type: 'move',
          x:  this.masterList[this.localUserObj.id].x,
          y:  this.masterList[this.localUserObj.id].y,
        }));
      },
      leave: (id) => {
        delete this.masterList[id];
        this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
      },
      keepAlive: (id) => {
        if(this.masterList[id]){
          this.masterList[id].lastUpdate = performance.now();
        }
      },
      camON: (id) => {
        this.masterList[id].cam = true;
        this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
      },
      counter: (id,messsage) => {
        const index = messsage.index;
        const map = messsage.map;
        const count = messsage.count;
        this.updateRemoteCount(index,map,count);
      },
    }

    VoxeetSDK.command.on('received', (participant, message) => {
      const id = participant.id;
      const _message = JSON.parse(message);
      messageCallBack[_message.type](id, _message,participant);
    });
    
  }

  updateRemoteCount(index,map,count){
    if(map == this.currentMap.data[0].map){
      this.currentMap.data[0].data.likeCounter[index].count = count;
      this.content.likeCounter[index].count = count;

    }
  }

  addLove(id){
    let count, index;
    this.content.likeCounter.forEach((item,i) => {
      if(item.id === id){
        item.count++;
        this.currentMap.data[0].data.likeCounter[i].count = item.count;
        count = item.count;
        index = i;
      }
    });
    this.updateContentInDB();
    this.updateCounter(this.currentMap.data[0].map,index,count);
    
  };

  updateContentInDB(){
    fetch(`${this.url}/updateMap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.currentMap.data[0]),
    });
  }
  updateCounter(map,index,count){
    this.sendMessage(JSON.stringify({type: 'counter', map , index, count}));
  }

  removeLove(id){
    let count = 0;
    let index = 0;
    this.content.likeCounter.forEach((item,i) => {
      if(item.id === id){
        item.count--;
        this.currentMap.data[0].data.likeCounter[i].count = item.count;
        index = i;
        count = item.count;
      }
    });
    this.updateContentInDB();
    this.updateCounter(this.currentMap.data[0].map,index,count);
  };
  async joinRoom(roomName = 'testingRoom') {
    VoxeetSDK.conference.create({ alias: roomName, params: { dolbyVoice: true } })
    .then(conference => 
                  VoxeetSDK.conference.join(conference, {
                                                          constraints: { audio: this.mic, video: this.cam },
                                                          preferRecvMono: false,
                                                          spatialAudio: true
                                                        }))
                          .then(() =>{
                            const scale   = { x: window.innerWidth / 4, y: window.innerHeight / 3, z: 1 };
                            const forward = { x: 0, y: -1, z: 0 };
                            const up      = { x: 0, y: 0,  z: 1 };
                            const right   = { x: 1, y: 0,  z: 0 };

                            VoxeetSDK.conference.setSpatialEnvironment(scale, forward, up, right);
                            this.checkTalking();
                            this.inConference = true;
                            this.keepAlive();
                          })
                          .catch((e) => console.log('Something wrong happened : ' + e));
  }

keepAlive(){
if(this.life){
  clearInterval(this.life);
}
if(this.validateLife){
  clearInterval(this.validateLife);
}
this.life = setInterval(() => {
    this.sendMessage(JSON.stringify({type: 'keepAlive'}));
  },1000);
this.life = setInterval(() => {
   Object.keys(this.masterList).forEach((key) => {
    if(!this.masterList[key].local && this.masterList[key].lastUpdate + 3000 < performance.now()){
       delete this.masterList[key];
       this.userList = Object.values(this.masterList).filter((x:any) => x.id !== this.localUserObj.id);
    }

   });
},2000);
}

checkTalking(){
    setInterval(() => {
      let participants = VoxeetSDK.conference.participants;
      for (let participant of participants) {
        VoxeetSDK.conference.isSpeaking( VoxeetSDK.conference.participants.get(participant[0]),
          isSpeaking => {
            const entry = this.userList.find(x => x.id === participant[0])
            if(this.masterList[participant[0]]){
              this.masterList[participant[0]].talking = isSpeaking;
                          if( this.masterList[participant[0]].local){
              this.talking = isSpeaking;
            }
            } else{

            }


            if(entry){
              this.userList.find(x => x.id === participant[0]).talking = isSpeaking;  
            } else {
              this.userList = this.userList.filter(x => x.id !== participant[0]);
            }
        });
      }
    }, 1000);

  }

updateAudioStreams(){
  const localX = this.masterList[this.localUserObj.id].x;
  const localY = this.masterList[this.localUserObj.id].y;

  const getFloat = (x:string) => parseFloat(x.split('px')[0]);
  Object.values(this.masterList).forEach((value:any) => {
    if(value.id !== this.localUserObj.id){
      if(Math.abs(getFloat(localX) - getFloat(value.x) )> 900 || Math.abs(getFloat(localY) - getFloat(value.y)) > 900){
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
  VoxeetSDK.conference.startVideo(VoxeetSDK.session.participant,{});
}

turnOffCam(){
  VoxeetSDK.conference.stopVideo(VoxeetSDK.session.participant);
}

sendMessage(message){
  VoxeetSDK.command.send(message);
}

}
