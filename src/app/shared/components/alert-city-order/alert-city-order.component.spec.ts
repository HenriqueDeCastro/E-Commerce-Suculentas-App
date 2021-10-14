import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCityOrderComponent } from './alert-city-order.component';

describe('AlertCityOrderComponent', () => {
  let component: AlertCityOrderComponent;
  let fixture: ComponentFixture<AlertCityOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCityOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCityOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
