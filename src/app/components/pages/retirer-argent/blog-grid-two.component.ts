import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-blog-grid-two',
  templateUrl: './blog-grid-two.component.html',
  styleUrls: ['./blog-grid-two.component.css']
})
export class BlogGridTwoComponent implements OnInit {

  constructor() { }
  // Footer style
  date=moment().format('ll'); 
  classname = "footer-area footer-area-v1 footer-area-v3  bg_cover";
  ftlogo = "assets/images/logo-2.png";
  ftbg = "assets/images/footer-3.jpg";

  ngOnInit(): void {
  }

}
