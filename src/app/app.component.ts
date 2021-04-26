import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h1 class="p-5 display-4 text-white bg-dark">Header</h1> -->
    <!-- <app-header></app-header> -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elearning';
}
