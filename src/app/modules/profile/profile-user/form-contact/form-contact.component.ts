import { UserService } from './../../../../core/services/user/user.service';
import { IUser } from '../../../../shared/models/iuser';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Output() contactsForm!: FormGroup;
  @Input() textBtn!: string;
  @Input() disableBtn!: boolean;
  public user!: IUser;
  public txtPrevious: string = TextButton.previous;
  public txtNext: string = TextButton.next;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe((user: IUser) => {
      this.user = user;
      this.validation();
    });
  }

  validation(): void {
    this.contactsForm = this.fb.group({
      phoneNumber: [this.user.phoneNumber, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: [{value: this.user.email, disabled: true}, [Validators.required, Validators.email]]
    });
  }

  return(): void {
    this.returnForm.emit(this.contactsForm);
  }

}
