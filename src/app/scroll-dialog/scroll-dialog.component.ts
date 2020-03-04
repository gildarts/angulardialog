import { Component, OnInit, Inject, Renderer2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OverlayRef } from '@angular/cdk/overlay';
import { YM_DIALOG_ARGS } from '../ym-dialog.service';

@Component({
  selector: 'app-scroll-dialog',
  templateUrl: './scroll-dialog.component.html',
  styleUrls: ['./scroll-dialog.component.css']
})
export class ScrollDialogComponent implements OnInit, OnDestroy {

  constructor(
    private overlayRef: OverlayRef,
    @Inject(YM_DIALOG_ARGS) public data: any
  ) {
    console.log(data);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  closeOverlay() {
    this.overlayRef.detach();
  }
}
