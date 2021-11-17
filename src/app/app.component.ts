import { Component, OnInit } from '@angular/core';
import { GetDataService } from './services/get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Megaloverse';

  constructor(
    private readonly getData: GetDataService
  ){}
  ngOnInit() {
    // this.getData.initDolbyIO();
  }


}
