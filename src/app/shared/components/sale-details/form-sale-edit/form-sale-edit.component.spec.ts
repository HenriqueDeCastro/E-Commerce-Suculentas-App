import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSaleEditComponent } from './form-sale-edit.component';

describe('FormSaleEditComponent', () => {
  let component: FormSaleEditComponent;
  let fixture: ComponentFixture<FormSaleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSaleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
