import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
declare const $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public readonly getData: GetDataService
  ) { }

  ngOnInit() {
    $(".expand").on('click', () =>{
      if(this.IsFullScreenCurrently())
      this.GoOutFullscreen();
      else
      this.GoInFullscreen($("body").get(0));
    });
    
    $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', () => {
      if(this.IsFullScreenCurrently()) {

      }
      else {

      }
    });
  }

  updateCAM(){
    this.getData.cam = !this.getData.cam;
    if(this.getData.cam){
     this.getData.turnOnCam();
    } else {
      this.getData.turnOffCam();
    }
  }

updateMIC(){
  this.getData.mic = !this.getData.mic;
  if(this.getData.mic){
    this.getData.turnOnMic();
   } else {
     this.getData.turnOffMic();
   }
}

updateUserLock(){
  this.getData.userLock = !this.getData.userLock;
}

GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
}


GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
}


IsFullScreenCurrently() {
	const full_screen_element = document.fullscreenElement || null;
	
	if(full_screen_element === null)
		return false;
	else
		return true;
}



}
