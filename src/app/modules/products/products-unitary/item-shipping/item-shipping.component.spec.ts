import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShippingComponent } from './item-shipping.component';

describe('ItemShippingComponent', () => {
  let component: ItemShippingComponent;
  let fixture: ComponentFixture<ItemShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
