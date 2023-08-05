import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleComponentComponent } from './toogle-component.component';

describe('ToogleComponentComponent', () => {
  let component: ToogleComponentComponent;
  let fixture: ComponentFixture<ToogleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToogleComponentComponent]
    });
    fixture = TestBed.createComponent(ToogleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
