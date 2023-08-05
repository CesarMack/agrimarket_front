import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmProfileComponent } from './farm-profile.component';

describe('FarmProfileComponent', () => {
  let component: FarmProfileComponent;
  let fixture: ComponentFixture<FarmProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmProfileComponent]
    });
    fixture = TestBed.createComponent(FarmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
