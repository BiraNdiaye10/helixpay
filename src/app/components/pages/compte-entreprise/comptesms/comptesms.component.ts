import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-comptesms',
  templateUrl: './comptesms.component.html',
  styleUrls: ['./comptesms.component.css']
})
export class ComptesmsComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  onclose(){
    this.matDialog.closeAll();
    }
}
