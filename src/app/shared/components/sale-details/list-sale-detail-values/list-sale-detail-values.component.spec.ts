import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleDetailValuesComponent } from './list-sale-detail-values.component';

describe('ListSaleDetailValuesComponent', () => {
  let component: ListSaleDetailValuesComponent;
  let fixture: ComponentFixture<ListSaleDetailValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSaleDetailValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaleDetailValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
