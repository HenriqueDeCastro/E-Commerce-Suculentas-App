import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-information-edit',
  templateUrl: './form-information-edit.component.html',
  styleUrls: ['./form-information-edit.component.scss']
})
export class FormInformationEditComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Input() informationForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  return(): void {
    this.returnForm.emit(this.informationForm);
  }
}
