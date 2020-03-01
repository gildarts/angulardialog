import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DialogTriggerComponent } from './dialog-trigger/dialog-trigger.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'second', component: SecondComponent },
  { path: 'dialog', component: DialogTriggerComponent, outlet: 'dialog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
