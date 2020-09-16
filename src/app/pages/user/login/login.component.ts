import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/Auth.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public LoginForm: FormGroup;
  public RealizandoLogin = false;

  constructor(private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarComponent) { }

  ngOnInit(): void {
    this.Validation();
  }

  Validation(): void {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  Login(): void {
    if (this.LoginForm.valid) {
      this.RealizandoLogin = true;
      this.authService.Login(this.LoginForm.value).subscribe(
        () => {
          this.RealizandoLogin = false;
          this.router.navigate(['/produtos']);
        },
        error => {
          this.RealizandoLogin = false;
          console.log(error);
          this.snackbar.OpenSnackBarError('Erro no login');
      });
    }else {
      this.snackbar.OpenSnackBarError('Preencha todos os campos!');
    }
  }
}
