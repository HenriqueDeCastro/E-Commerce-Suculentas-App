import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from './../../../core/services/snackbar/snackbar.service';
import { AuthService } from './../../../core/services/auth/auth.service';
import { IUserReset } from './../../../shared/models/iuser-reset';
import { TextButton } from './../../../shared/enums/text-button';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComparePasswordsService } from 'src/app/core/services/compare-passwords/compare-passwords.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  @Output() passwordsForm!: FormGroup;
  public txt: string = TextButton.send;
  public disableBtn: boolean = false;
  public email!: string;
  public token!: string;

  constructor(
    private fb: FormBuilder,
    private comparePasswordsService: ComparePasswordsService,
    private activetedRoute: ActivatedRoute,
    private authService: AuthService,
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validation();
    this.receiveValueRoute();
  }

  validation(): void {
    this.passwordsForm = this.fb.group({
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', Validators.required]
      }, { validator: this.comparePasswordsService.compare })
    });
  }

  receiveValueRoute(): void {
    this.token = this.activetedRoute.snapshot.params.token;
    this.email = this.activetedRoute.snapshot.params.email;
  }

  reset(): void {
    if (this.passwordsForm.valid) {
      this.disableBtn = true;
      this.txt = TextButton.sending;

      const reset: IUserReset = {
        token: this.token,
        email: this.email,
        password: this.passwordsForm.get('passwords.password')?.value,
        confirmedPassword: this.passwordsForm.get('passwords.confirmedPassword')?.value
      };

      this.authService.resetPassword(reset).subscribe(() => {

        this.snackbar.openSuccess(MessagesSnackbar.reset_password_successful);
        this.router.navigate(['/user/login']);
      },
      (error) => {
        this.disableBtn = false;
        this.txt = TextButton.send;

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
    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }
}
