import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOrderPageComponent } from './details-order-page.component';

describe('DetailsOrderPageComponent', () => {
  let component: DetailsOrderPageComponent;
  let fixture: ComponentFixture<DetailsOrderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOrderPageComponent]
    });
    fixture = TestBed.createComponent(DetailsOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
