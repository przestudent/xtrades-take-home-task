import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringFooterComponent } from './hiring-footer.component';

describe('HiringFooterComponent', () => {
  let component: HiringFooterComponent;
  let fixture: ComponentFixture<HiringFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringFooterComponent]
    });
    fixture = TestBed.createComponent(HiringFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
