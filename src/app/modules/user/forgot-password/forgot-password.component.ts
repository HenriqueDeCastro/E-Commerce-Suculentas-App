import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { TextButton } from 'src/app/shared/enums/text-button';
import { IUserForgotPassword } from './../../../shared/models/iuser-forgot-password';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotForm!: FormGroup;
  public requisition: boolean = false;
  public txtBtn = TextButton.send;
  public disableBtn: boolean = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.Validation();
  }

  Validation(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  forgotPassword(): void {
    if(this.forgotForm.valid) {
      this.disableBtn = true;
      this.txtBtn = TextButton.sending;

      const forgot = this.forgotForm.getRawValue() as IUserForgotPassword;
      console.log(forgot)

      this.authService.forgotPassword(forgot).subscribe(
        () => {

          this.snackbar.openSuccess(MessagesSnackbar.verify_email);
          this.router.navigate(['/user/login']);
        },
        error => {
          this.txtBtn = TextButton.send;
          this.disableBtn = false;
          const erro = error.error;

          switch (erro) {
            case 'Usuario não encontrado!':
              this.snackbar.openError(MessagesSnackbar.email_not_found);
              break;
            default:
              this.snackbar.openError(MessagesSnackbar.server_error);
              break;
          }
      });
    }
    else{
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }
}
