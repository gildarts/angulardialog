import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: 'div.modal-dialog'
})
export class YmDialogContainerDirective implements OnInit {

  constructor() { }

  @HostListener('click', ['$event']) click = this.preeventBubble;

  ngOnInit() {
    console.log('YmDialogContainerDirective');
  }

  preeventBubble(e: MouseEvent) {
    e.stopPropagation();
  }
}
