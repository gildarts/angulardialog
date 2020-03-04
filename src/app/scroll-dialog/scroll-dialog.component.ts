import { Component, OnInit, Inject, Renderer2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-scroll-dialog',
  templateUrl: './scroll-dialog.component.html',
  styleUrls: ['./scroll-dialog.component.css']
})
export class ScrollDialogComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private render: Renderer2,
    private overlayRef: OverlayRef
  ) {
    console.log(overlayRef);
  }

  ngOnInit(): void {
    this.render.addClass(this.doc.body, 'modal-open');
  }

  ngOnDestroy() {
    this.render.removeClass(this.doc.body, 'modal-open');
  }

  closeOverlay() {
    this.overlayRef.detach();
  }

  preeventBubble(e: MouseEvent) {
    e.stopPropagation();
  }
}
