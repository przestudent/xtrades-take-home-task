import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringSectionComponent } from './hiring-section.component';

describe('HiringSectionComponent', () => {
  let component: HiringSectionComponent;
  let fixture: ComponentFixture<HiringSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringSectionComponent]
    });
    fixture = TestBed.createComponent(HiringSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
