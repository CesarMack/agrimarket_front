import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmiPageComponent } from './dashboard-admi-page.component';

describe('DashboardAdmiPageComponent', () => {
  let component: DashboardAdmiPageComponent;
  let fixture: ComponentFixture<DashboardAdmiPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmiPageComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
