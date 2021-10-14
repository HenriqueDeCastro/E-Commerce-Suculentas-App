import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPasswordsComponent } from './form-passwords.component';

describe('FormPasswordsComponent', () => {
  let component: FormPasswordsComponent;
  let fixture: ComponentFixture<FormPasswordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPasswordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPasswordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
