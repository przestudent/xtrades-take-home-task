import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringMainSectionComponent } from './hiring-main-section.component';

describe('HiringMainSectionComponent', () => {
  let component: HiringMainSectionComponent;
  let fixture: ComponentFixture<HiringMainSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringMainSectionComponent]
    });
    fixture = TestBed.createComponent(HiringMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
