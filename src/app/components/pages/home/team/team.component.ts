import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  teamblock = [
    {
      icon: 'assets/images/application-unique.png',
      title: 'une seule application',
      text: 'Avec tous les moyens de paiement.'
    },
    {
      icon: 'assets/images/revenus-additionnels.png',
      title: 'Revenus additionelles',
      text: 'En distribuant des services digitaux.'
    },
    {
      icon: 'assets/images/une-securite.png',
      title: 'plus de securite',
      text: 'Moins de Cash et de fraudes.'
    },
    {
      icon: 'assets/images/reporting.png',
      title: 'Un reporting',
      text: ' en temps réel de vos transactions.'
    },
    {
      icon: 'assets/images/contrat-unique.png',
      title: 'Un contrat unique',
      text: 'pour un accès à plusieurs modes de paiement.'
    },
    {
      icon: 'assets/images/service-client.png',
      title: 'Un service client',
      text: 'disponible de 7h à 23h, 7j/7.'
    }
  ];

  ngOnInit(): void {
  }

}
