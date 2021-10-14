import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValuesEditComponent } from './form-values-edit.component';

describe('FormValuesEditComponent', () => {
  let component: FormValuesEditComponent;
  let fixture: ComponentFixture<FormValuesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValuesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValuesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
