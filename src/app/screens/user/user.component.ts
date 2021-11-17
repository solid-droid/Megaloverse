import { Component, OnInit } from '@angular/core';
declare const attachStream;
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    public readonly getData: GetDataService
  ) { }

  ngOnInit() {
       this.getData.getuserList.subscribe((info)=>{
        if(info){
          if(info.add && !info.data.localUser){
            // this.addUser(info.data);
          } else {
            // this.deleteUser(info.data);
          }
        }
       })
  }


  async addUser(data){
    await new Promise(resolve => setTimeout(resolve, 100));
    const videoNode = document.getElementById(`videoFeed_${data.id}`);  
    attachStream(videoNode, data.stream);
  }

  deleteUser(data){
    // this.userList = this.userList.filter(item => item.id !== data.id);
  }

}
