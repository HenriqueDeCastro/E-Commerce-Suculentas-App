import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInformationEditComponent } from './form-information-edit.component';

describe('FormInformationEditComponent', () => {
  let component: FormInformationEditComponent;
  let fixture: ComponentFixture<FormInformationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInformationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInformationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
