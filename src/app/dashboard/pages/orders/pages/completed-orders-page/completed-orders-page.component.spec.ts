import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrdersPageComponent } from './completed-orders-page.component';

describe('CompletedOrdersPageComponent', () => {
  let component: CompletedOrdersPageComponent;
  let fixture: ComponentFixture<CompletedOrdersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedOrdersPageComponent]
    });
    fixture = TestBed.createComponent(CompletedOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
