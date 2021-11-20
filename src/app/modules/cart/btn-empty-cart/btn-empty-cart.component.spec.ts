import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEmptyCartComponent } from './btn-empty-cart.component';

describe('BtnEmptyCartComponent', () => {
  let component: BtnEmptyCartComponent;
  let fixture: ComponentFixture<BtnEmptyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEmptyCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEmptyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
