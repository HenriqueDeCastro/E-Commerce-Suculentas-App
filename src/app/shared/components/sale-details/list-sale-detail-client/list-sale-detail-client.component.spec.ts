import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleDetailClientComponent } from './list-sale-detail-client.component';

describe('ListSaleDetailClientComponent', () => {
  let component: ListSaleDetailClientComponent;
  let fixture: ComponentFixture<ListSaleDetailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSaleDetailClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSaleDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
