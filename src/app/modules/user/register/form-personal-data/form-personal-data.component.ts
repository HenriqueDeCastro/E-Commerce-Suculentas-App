import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-form-personal-data',
  templateUrl: './form-personal-data.component.html',
  styleUrls: ['./form-personal-data.component.scss']
})
export class FormPersonalDataComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  public dataForm!: FormGroup;
  public txtNext: string = TextButton.next;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.dataForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(70)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  return(): void {
    this.returnForm.emit(this.dataForm);
  }
}
