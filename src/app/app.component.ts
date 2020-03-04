import { Component, OnInit, Injector, Inject, StaticProvider } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { ScrollDialogComponent } from './scroll-dialog/scroll-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng9';

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay,
    private injector: Injector
  ) {

  }

  ngOnInit() {
  }

  alert() {
    this.dialog.open(AlertComponent, {
      data: 'zoe'
    });
  }

  showOverlay() {
    const ol = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      scrollStrategy: this.overlay
        .scrollStrategies
        .reposition(),
      hasBackdrop: true,
    });

    ol.attach(new ComponentPortal(CustomDialogComponent));

    ol.backdropClick().subscribe(v => {
      console.log(v);
      ol.detach();
    })
  }

  showScrollable() {
    const ol = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      scrollStrategy: this.overlay
        .scrollStrategies
        .reposition(),
      hasBackdrop: true,
    });

    const inject = Injector.create([{ provide: OverlayRef, useValue: ol }], this.injector);
    ol.attach(new ComponentPortal(ScrollDialogComponent, null, inject));

    ol.backdropClick().subscribe(v => {
      console.log(v);
      ol.detach();
    });
  }
}
