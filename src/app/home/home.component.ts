import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
    `
      :host {
        height: 100%;
        flex-direction: column;
        display: flex;
      }
    `,
  ],
})
export class HomeComponent {}
