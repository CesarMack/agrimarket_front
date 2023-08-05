import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmiUsersPageComponent } from './dashboard-admi-users-page.component';

describe('DashboardAdmiUsersPageComponent', () => {
  let component: DashboardAdmiUsersPageComponent;
  let fixture: ComponentFixture<DashboardAdmiUsersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmiUsersPageComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmiUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
