import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrdersPageComponent } from './pending-orders-page.component';

describe('PendingOrdersPageComponent', () => {
  let component: PendingOrdersPageComponent;
  let fixture: ComponentFixture<PendingOrdersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingOrdersPageComponent]
    });
    fixture = TestBed.createComponent(PendingOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
