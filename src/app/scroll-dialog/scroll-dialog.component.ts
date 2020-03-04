import { Component, OnInit, Inject, Renderer2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-dialog',
  templateUrl: './scroll-dialog.component.html',
  styleUrls: ['./scroll-dialog.component.css']
})
export class ScrollDialogComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.render.addClass(this.doc.body, 'modal-open');
  }

  ngOnDestroy() {
    this.render.removeClass(this.doc.body, 'modal-open');
  }
}
