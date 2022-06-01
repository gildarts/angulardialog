import { Injectable, TemplateRef, Injector, InjectionToken, StaticProvider } from '@angular/core';
import { Overlay, ComponentType, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

export const YM_DIALOG_ARGS = new InjectionToken("YMDialogArgs");

@Injectable({
  providedIn: 'root'
})
export class YmDialogService {

  constructor(
    private overlay: Overlay,
  ) { }

  open<T>(modal: ComponentType<T>, options?: {data?: any, parent?: Injector}) {

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

    const providers: StaticProvider[] = [
      { provide: OverlayRef, useValue: ol },
      { provide: YM_DIALOG_ARGS, useValue: options?.data }
    ]

    const inject = Injector.create({ providers, parent: options?.parent });

    ol.attach(new ComponentPortal(modal, null, inject));

    return ol;
  }
}
