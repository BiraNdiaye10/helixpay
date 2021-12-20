import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-demanderpaiement',
  templateUrl: './demanderpaiement.component.html',
  styleUrls: ['./demanderpaiement.component.css']
})
export class DemanderpaiementComponent implements OnInit {

  constructor() { }
  date=moment().format('ll'); 
  ngOnInit(): void {
  }

}
