import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOrderComponent } from './market-order.component';

describe('MarketOrderComponent', () => {
  let component: MarketOrderComponent;
  let fixture: ComponentFixture<MarketOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketOrderComponent]
    });
    fixture = TestBed.createComponent(MarketOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
