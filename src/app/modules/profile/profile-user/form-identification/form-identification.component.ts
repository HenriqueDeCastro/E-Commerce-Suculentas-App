import { IUser } from './../../../../shared/models/iuser';
import { UserService } from './../../../../core/services/user/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-form-identification',
  templateUrl: './form-identification.component.html',
  styleUrls: ['./form-identification.component.scss']
})
export class FormIdentificationComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Output() identificationForm!: FormGroup;
  public txtNext: string = TextButton.next;
  public user!: IUser;

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
    this.identificationForm = this.fb.group({
      fullname: [this.user.fullName, [Validators.required, Validators.minLength(4), Validators.maxLength(70)]],
      cpf: [this.user.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  return(): void {
    this.returnForm.emit(this.identificationForm);
  }

}
