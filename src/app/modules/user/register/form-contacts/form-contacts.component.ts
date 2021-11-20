import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.scss']
})
export class FormContactsComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  public contactsForm!: FormGroup;
  public txtPrevious: string = TextButton.previous;
  public txtNext: string = TextButton.next;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.contactsForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  return(): void {
    this.returnForm.emit(this.contactsForm);
  }
}
