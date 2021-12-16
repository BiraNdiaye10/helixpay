import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-compte-entreprise',
  templateUrl: './compte-entreprise.component.html',
  styleUrls: ['./compte-entreprise.component.css']
})
export class CompteEntrepriseComponent implements OnInit {

  constructor() { }
  date=moment().format('ll'); 
  ngOnInit(): void {
  }

}
