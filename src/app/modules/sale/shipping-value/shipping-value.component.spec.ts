import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingValueComponent } from './shipping-value.component';

describe('ShippingValueComponent', () => {
  let component: ShippingValueComponent;
  let fixture: ComponentFixture<ShippingValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
