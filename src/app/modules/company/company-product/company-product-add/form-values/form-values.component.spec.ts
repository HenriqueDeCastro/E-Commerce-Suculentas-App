import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValuesComponent } from './form-values.component';

describe('FormValuesComponent', () => {
  let component: FormValuesComponent;
  let fixture: ComponentFixture<FormValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
