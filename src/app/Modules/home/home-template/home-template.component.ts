import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-template',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./home-template.component.scss']
})
export class HomeTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
