import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmiDbPageComponent } from './dashboard-admi-db-page.component';

describe('DashboardAdmiDbPageComponent', () => {
  let component: DashboardAdmiDbPageComponent;
  let fixture: ComponentFixture<DashboardAdmiDbPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmiDbPageComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmiDbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
