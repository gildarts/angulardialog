import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng9';

  constructor(
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {

  }

  alert() {
    this.dialog.open(AlertComponent, {
      data: 'zoe'
    });
  }
}
