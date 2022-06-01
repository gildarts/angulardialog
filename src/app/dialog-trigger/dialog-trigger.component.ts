import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog-trigger',
  templateUrl: './dialog-trigger.component.html',
  styleUrls: ['./dialog-trigger.component.css']
})
export class DialogTriggerComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    const dr = this.dialog.open(AlertComponent);

    await dr.afterClosed().toPromise()

    console.log(this.actRoute);

    this.router.navigate([{outlets: {'dialog': null}}]);
  }

}
