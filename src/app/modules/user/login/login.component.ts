import { IUserToken } from './../../../shared/models/iuser-token';
import { IUserLogin } from './../../../shared/models/iuser-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { MessagesSnackbar } from '../../../shared/enums/messages-snackbar';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public disable: boolean = false;
  public txtBtnAccess: string = TextButton.access;
  private fromUrl!: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private authService: AuthService,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activetedRoute.queryParams.subscribe(params => this.fromUrl = params.fromUrl);
    this.validation();
  }

  validation() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  login() {
    if(this.loginForm.valid) {
      this.txtBtnAccess = TextButton.accessing;
      this.disable = !this.disable;

      const userLogin: IUserLogin = this.loginForm.getRawValue() as IUserLogin;

      this.authService.login(userLogin).subscribe((user: IUserToken) => {
        if (this.fromUrl) {
          this.router.navigateByUrl(this.fromUrl);
        } else {
          this.router.navigate(['/products']);
        }
      },
      (error) => {
        this.txtBtnAccess = TextButton.access;
        this.disable = !this.disable;

        switch (error.status) {
          case 403:
            this.snackbar.openError(MessagesSnackbar.unauthorized_login_error);
            break;
          default:
            this.snackbar.openError(MessagesSnackbar.server_error);
            break;
        }
      });
    }
    else {
      this.snackbar.openError(MessagesSnackbar.fill_fields)
    }
  }
}
