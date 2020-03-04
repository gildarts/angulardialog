import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogTriggerComponent } from './dialog-trigger/dialog-trigger.component';
import { AlertComponent } from './alert/alert.component';
import { SecondComponent } from './second/second.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { ScrollDialogComponent } from './scroll-dialog/scroll-dialog.component';
import { YmDialogOverlayDirective } from './ym-dialog-overlay.directive';
import { YmDialogContainerDirective } from './ym-dialog-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DialogTriggerComponent,
    AlertComponent,
    SecondComponent,
    CustomDialogComponent,
    ScrollDialogComponent,
    YmDialogOverlayDirective,
    YmDialogContainerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    OverlayModule,
    PortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
