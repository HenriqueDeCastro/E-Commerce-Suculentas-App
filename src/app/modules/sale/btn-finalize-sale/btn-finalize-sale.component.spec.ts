import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFinalizeSaleComponent } from './btn-finalize-sale.component';

describe('BtnFinalizeSaleComponent', () => {
  let component: BtnFinalizeSaleComponent;
  let fixture: ComponentFixture<BtnFinalizeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFinalizeSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFinalizeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
