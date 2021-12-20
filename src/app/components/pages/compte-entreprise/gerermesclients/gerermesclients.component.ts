import { Component, OnInit } from '@angular/core';
import { ComptesmsComponent } from '../comptesms/comptesms.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-gerermesclients',
  templateUrl: './gerermesclients.component.html',
  styleUrls: ['./gerermesclients.component.css']
})
export class GerermesclientsComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }
open () {
  const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="50%";
    dialogConfig.height = '70%';
    this.matDialog.open(ComptesmsComponent, dialogConfig);
}


}
