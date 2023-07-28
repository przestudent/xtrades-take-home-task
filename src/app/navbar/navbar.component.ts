import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public isMobile: boolean;
  public isOpen: boolean;
  constructor() {
    this.isMobile = false;
    this.isOpen = false;
  }
  ngOnInit() {
    console.log('konstrukted');
    const mql = window.matchMedia('(max-width:700px)');
    if (mql.matches) {
      this.isMobile = true;
    }
    mql.addEventListener('change', (e) => {
      console.log('change');
      if (e.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    console.log('init');
  }
  closeModal() {
    console.log('klik');
    this.isOpen = false;
  }
  openModal() {
    console.log('klik nav butt');
    this.isOpen = true;
  }
}
