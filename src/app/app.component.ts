import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { AlertComponent } from './alert/alert.component';
// import { Overlay } from '@angular/cdk/overlay';
// import { ComponentPortal } from '@angular/cdk/portal';
// import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng9';

  constructor(
    // private dialog: MatDialog,
    // private overlay: Overlay
  ) {

  }

  ngOnInit() {
  }

  alert() {
    // this.dialog.open(AlertComponent, {
    //   data: 'zoe'
    // });
  }

  showOverlay() {
    // const ol = this.overlay.create({
    //   positionStrategy: this.overlay
    //     .position()
    //     .global()
    //     .centerHorizontally()
    //     .centerVertically(),
    //   scrollStrategy: this.overlay
    //     .scrollStrategies
    //     .reposition(),
    //   hasBackdrop: true,
    // });

    // ol.attach(new ComponentPortal(CustomDialogComponent));

    // ol.backdropClick().subscribe(v => {
    //   console.log(v);
    //   ol.detach();
    // })
  }
}
