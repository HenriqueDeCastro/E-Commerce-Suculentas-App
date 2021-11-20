import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleDetailShippingComponent } from './list-sale-detail-shipping.component';

describe('ListSaleDetailShippingComponent', () => {
  let component: ListSaleDetailShippingComponent;
  let fixture: ComponentFixture<ListSaleDetailShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSaleDetailShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaleDetailShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
