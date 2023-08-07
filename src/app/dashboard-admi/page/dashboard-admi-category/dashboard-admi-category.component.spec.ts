import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmiCategoryComponent } from './dashboard-admi-category.component';

describe('DashboardAdmiCategoryComponent', () => {
  let component: DashboardAdmiCategoryComponent;
  let fixture: ComponentFixture<DashboardAdmiCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmiCategoryComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmiCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
