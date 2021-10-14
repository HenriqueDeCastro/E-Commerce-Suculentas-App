import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  public userForm!: FormGroup;
  public user!: IUser | undefined;
  public disable: boolean = false;
  @Output() userReturn = new EventEmitter<IUser>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  searchUser(): void {
    if(this.userForm.valid) {
      this.disable = true;
      this.authService.getUserByEmail(this.userForm.get('email')?.value).subscribe((user: IUser) => {

        this.disable = false;
        this.userForm.controls["email"].disable();
        this.user = user;
      },
      error => {
        const erro = error.error;
        this.disable = false;

        switch (erro.status) {
          case 404:
            this.snackbar.openError(MessagesSnackbar.email_not_found);
            break;
          default:
            this.snackbar.openError(MessagesSnackbar.server_error);
            break;
        }
      });
    }
  }

  alterUser() {
    this.userForm.controls["email"].enable();
    this.user = undefined;
  }

  return(): void {
    if(this.user) {
      this.userReturn.emit(this.user);
    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields)
    }
  }
}
