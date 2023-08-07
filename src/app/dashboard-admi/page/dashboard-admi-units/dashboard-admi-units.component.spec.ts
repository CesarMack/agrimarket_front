import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmiUnitsComponent } from './dashboard-admi-units.component';

describe('DashboardAdmiUnitsComponent', () => {
  let component: DashboardAdmiUnitsComponent;
  let fixture: ComponentFixture<DashboardAdmiUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdmiUnitsComponent]
    });
    fixture = TestBed.createComponent(DashboardAdmiUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
