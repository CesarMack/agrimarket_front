import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductPageComponent } from './details-product-page.component';

describe('DetailsProductPageComponent', () => {
  let component: DetailsProductPageComponent;
  let fixture: ComponentFixture<DetailsProductPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProductPageComponent]
    });
    fixture = TestBed.createComponent(DetailsProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
