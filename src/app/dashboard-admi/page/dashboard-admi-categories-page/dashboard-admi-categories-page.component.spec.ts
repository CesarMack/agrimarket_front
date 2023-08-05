import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmiCategoriesPageComponent } from './dashboard-admi-categories-page.component';

describe('DashboardAdmiCategoriesPageComponent', () => {
  let component: DashboardAdmiCategoriesPageComponent;
  let fixture: ComponentFixture<DashboardAdmiCategoriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmiCategoriesPageComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmiCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
