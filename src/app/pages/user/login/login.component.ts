import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';

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
              private snackbar: SnackbarService,
              private activetedRoute: ActivatedRoute,
              private mensagemSnackbar: MensagensService) { }

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
              this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroLoginNaoAutorizado);
              break;
            default:
              this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
              break;
          }
      });
    }else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
