import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-home-v2',
  templateUrl: './home-v2.component.html',
  styleUrls: ['./home-v2.component.css']
})
export class HomeV2Component implements OnInit {

  constructor() { }
  // Footer style
  // classname = "footer-area footer-area-v1 footer-area-v2 bg_cover";
  // ftlogo = "assets/images/logo-1.png";
  // ftbg = "assets/images/footer-2.jpg";
  // title = 'admin-panel-layout';
  // sideBarOpen = true;

  // sideBarToggler() {
  //   this.sideBarOpen = !this.sideBarOpen;
  // }
  date=moment().format('ll'); 
  ngOnInit(): void {
  }

}
