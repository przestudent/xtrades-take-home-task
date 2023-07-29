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
    const mql = window.matchMedia('(max-width:700px)');
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
  closeModal() {
    this.isOpen = false;
  }
  openModal() {
    this.isOpen = true;
  }
}
