import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradAdmiRegisterComponent } from './dashborad-admi-register.component';

describe('DashboradAdmiRegisterComponent', () => {
  let component: DashboradAdmiRegisterComponent;
  let fixture: ComponentFixture<DashboradAdmiRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboradAdmiRegisterComponent]
    });
    fixture = TestBed.createComponent(DashboradAdmiRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
