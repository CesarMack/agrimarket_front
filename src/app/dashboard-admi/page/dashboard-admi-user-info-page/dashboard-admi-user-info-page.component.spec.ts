import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmiUserInfoPageComponent } from './dashboard-admi-user-info-page.component';

describe('DashboardAdmiUserInfoPageComponent', () => {
  let component: DashboardAdmiUserInfoPageComponent;
  let fixture: ComponentFixture<DashboardAdmiUserInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmiUserInfoPageComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmiUserInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
