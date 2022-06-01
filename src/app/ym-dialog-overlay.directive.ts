import { Directive, OnInit, HostListener, Inject, Renderer2, OnDestroy, HostBinding } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: 'div.modal'
})
export class YmDialogOverlayDirective implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private render: Renderer2,
    private overlayRef: OverlayRef,
  ) { }

  @HostListener('click') click = this.closeOverlay;

  @HostBinding('style.display') display = 'block';

  @HostBinding('class.show') show = true;

  ngOnInit() {
    console.log('YmDialogOverlayDirective');
    this.render.addClass(this.doc.body, 'modal-open');
  }

  ngOnDestroy() {
    this.render.removeClass(this.doc.body, 'modal-open');
  }

  closeOverlay() {
    this.overlayRef.detach();
  }
}
