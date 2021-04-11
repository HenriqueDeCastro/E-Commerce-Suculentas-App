import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public LoginForm: FormGroup;
  public Desabilitar = false;
  public TextoBotaoLogin = "Acessar";
  private FromUrl: string;

  constructor(private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarService,
              private activetedRoute: ActivatedRoute,
              private progressBarService: ProgressBarService,
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
      this.Desabilitar = true;
      this.progressBarService.Mostrar = true;
      this.TextoBotaoLogin = "Acessando";

      this.authService.Login(this.LoginForm.value).subscribe(
        () => {
          this.progressBarService.Mostrar = false;
          if (this.FromUrl) {
            this.router.navigateByUrl(this.FromUrl);
          } else {
            this.router.navigate(['/produtos']);
          }
        },
        error => {
          this.Desabilitar = false;
          this.TextoBotaoLogin = "Acessar";
          this.progressBarService.Mostrar = true;

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
