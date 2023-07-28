import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiring-section',
  templateUrl: './hiring-section.component.html',
  styleUrls: ['./hiring-section.component.css'],
})
export class HiringSectionComponent {
  public isMobile: boolean;
  constructor() {
    this.isMobile = false;
  }
  ngOnInit() {
    console.log('yup yup');
    const mql = window.matchMedia('(max-width:1280px)');
    if (mql.matches) {
      this.isMobile = true;
    }
    mql.addEventListener('change', (e) => {
      if (e.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
