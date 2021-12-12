import { Component, OnInit } from '@angular/core';
import moment from 'moment';
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  constructor() { }
  date=moment().format('ll'); 

  ngOnInit(): void {
  }

}
