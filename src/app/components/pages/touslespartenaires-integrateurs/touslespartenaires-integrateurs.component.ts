import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-touslespartenaires-integrateurs',
  templateUrl: './touslespartenaires-integrateurs.component.html',
  styleUrls: ['./touslespartenaires-integrateurs.component.css']
})
export class TouslespartenairesIntegrateursComponent implements OnInit {

  constructor() { }

  date=moment().format('ll'); 
  ngOnInit(): void {
  }

}
