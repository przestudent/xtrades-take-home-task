import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  styles: [
    `
      :host {
        padding-bottom: 5rem;
      }
    `,
  ],
})
export class MainComponent {}
