import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIdentificationEditComponent } from './form-identification-edit.component';

describe('FormIdentificationEditComponent', () => {
  let component: FormIdentificationEditComponent;
  let fixture: ComponentFixture<FormIdentificationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIdentificationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIdentificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
