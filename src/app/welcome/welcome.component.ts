import { Component, OnInit } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  names = ['zoe', 'cindy', 'sandy'];

  constructor(
    router: Router
  ) {
    const tree = router.parseUrl('/students/5(f:person;id=1;a=b//secret:acl//second:zoe)?name=zz');

    console.log(tree);

  }

  ngOnInit(): void {
    console.log('hello');
  }

}
