import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouter-un-mode-de-retrait',
  templateUrl: './ajouter-un-mode-de-retrait.component.html',
  styleUrls: ['./ajouter-un-mode-de-retrait.component.css']
})
export class AjouterUnModeDeRetraitComponent implements OnInit {
  show: boolean;
  constructor() { this.show = false;}
  date=moment().format('ll'); 
  ngOnInit(): void {
  }
  opensweetalert(){

    Swal.fire({
      title: 'Bravo',
      icon: 'success',
      text:' Votre compte a été ajouter avec succès.',
     
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your imaginary file has been deleted.',
        //   'success'
        // )
    
      }
      //  else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire(
      //     'Cancelled',
      //     'Your imaginary file is safe :)',
      //     'error'
      //   )
      // }
    })
  }
  showPassword() {
    this.show = !this.show;
}
}


