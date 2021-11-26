import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
declare const panzoom;
declare const $;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  panDetected = false;

  constructor(
    public readonly getData: GetDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData.getMap(this.router.url);
    const container = document.querySelector('#mapContent');
    panzoom(container, {
			maxZoom: 1,
			minZoom: 0.1,
			zoomDoubleClickSpeed: 1,
      initialX: 0,
      initialY: 0,
      initialZoom: 0.5,
  }).on('panstart', e => {
    // this.panDetected = true;
  });
  $("#localUser").css({left: `${800}px`, top: `${400}px`});
  $('.mapContainer').on('click touchend',(e) => {
    if(!this.panDetected && !this.getData.userLock){
      const pointerX = e.type === 'click' ? e.clientX : e.originalEvent.changedTouches[0].clientX;
      const pointerY = e.type === 'click' ? e.clientY : e.originalEvent.changedTouches[0].clientY;
      const tranformData = $('#mapContent').css('transform').split(',');
      const x = parseFloat(tranformData[4]);
      const y = parseFloat(tranformData[5].split(')')[0]);
      const z = parseFloat(tranformData[0].split('(')[1]);
      const zInv = 1 / z;
      const cords = [-x * zInv, -y * zInv];

      const finalCords = [
                                cords[0] + (pointerX - 20) * zInv,
                                cords[1] + (pointerY - 20 ) * zInv
                        ];
      $("#localUser").css({left: `${finalCords[0]}px`, top: `${finalCords[1]}px`});
      this.getData.setLocalCords( finalCords[0]+'px', finalCords[1]+'px');
      this.getData.updateLocalSpatialAudio();
      this.getData.sendMessage(JSON.stringify({
        type: 'move',
        x: finalCords[0]+'px',
        y: finalCords[1]+'px'
      }));
      this.getData.updateAudioStreams();
    }
      this.panDetected = false;
  });
  }

  updateLove(e,id){
    if(e.path[0].classList.length > 1){
      this.getData.removeLove(id);
    } else {
      this.getData.addLove(id);
    }
    e.path[0].classList.toggle("icon-heart--clicked");
  }

  openPage(url){
    window.location.href = url;
  }
}
