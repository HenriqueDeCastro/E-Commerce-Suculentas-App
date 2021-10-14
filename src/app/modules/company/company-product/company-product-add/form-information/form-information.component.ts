import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-information',
  templateUrl: './form-information.component.html',
  styleUrls: ['./form-information.component.scss']
})
export class FormInformationComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  public informationForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.informationForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  return(): void {
    this.returnForm.emit(this.informationForm);
  }
}
