import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  private FromUrl: string;

  constructor(private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarComponent,
              private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.Validation();
  }

  ReceberValorRota(): void {
    this.activetedRoute.queryParams.subscribe(params => this.FromUrl = params.fromUrl);
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
          if (this.FromUrl) {
            this.router.navigateByUrl(this.FromUrl);
          } else {
            this.router.navigate(['/produtos']);
          }
        },
        error => {
          this.RealizandoLogin = false;
          const erro = error.error;
          console.log(error);

          switch (erro.title) {
            case 'Unauthorized':
              this.snackbar.OpenSnackBarError('E-mail ou senha incorretos');
              break;
            default:
              this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
              break;
          }
      });
    }else {
      this.snackbar.OpenSnackBarError('Preencha todos os campos!');
    }
  }
}
