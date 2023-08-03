import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledOrdersPageComponent } from './canceled-orders-page.component';

describe('CanceledOrdersPageComponent', () => {
  let component: CanceledOrdersPageComponent;
  let fixture: ComponentFixture<CanceledOrdersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanceledOrdersPageComponent]
    });
    fixture = TestBed.createComponent(CanceledOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
