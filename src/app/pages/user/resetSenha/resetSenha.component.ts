import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { IResetSenha } from '../../../shared/models/IResetSenha';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-resetSenha',
  templateUrl: './resetSenha.component.html',
  styleUrls: ['./resetSenha.component.scss']
})
export class ResetSenhaComponent implements OnInit {

  public Registrando = false;
  public SenhaForm: FormGroup;
  public TextoBotao = 'Redefinir';
  private Token: string;
  private Email: string;
  private Reset: IResetSenha;

  constructor(private activetedRoute: ActivatedRoute,
              private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.Validation();
  }

  ReceberValorRota(): void {
    this.Token = this.activetedRoute.snapshot.params.token;
    this.Email = this.activetedRoute.snapshot.params.email;
  }

  Validation(): void {
    this.SenhaForm = this.fb.group({
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', Validators.required]
      }, { validator: this.CompararSenhas })
    });
  }

  ResetSenha(): void {
    if (this.SenhaForm.valid) {
      this.progressBarService.Mostrar();
      this.Registrando = true;
      this.TextoBotao = 'Redefinir';

      this.Reset = {
        token: this.Token,
        email: this.Email,
        password: this.SenhaForm.get('passwords.password').value,
        confirmedPassword: this.SenhaForm.get('passwords.confirmedPassword').value
      };
      this.authService.ResetSenha(this.Reset).subscribe((model: any) => {
        this.progressBarService.Mostrar();

        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.SenhaRedefinida);
        this.router.navigate(['/user/login']);
      },
      (error) => {
        this.progressBarService.Mostrar();
        this.Registrando = false;
        this.TextoBotao = 'Redefinindo';

        const erro = error.error;
        console.error(error);
        switch (erro) {
          case 'Usuario não encontrado!':
            this.snackbar.OpenSnackBarError(this.mensagemSnackbar.EmailNaoEncontrado);
            break;
          default:
            this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
            break;
        }
      });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);

    }
  }

  CompararSenhas(fbs: FormGroup): void {
    const confirmSenhaCtrl = fbs.get('confirmedPassword');
    if (confirmSenhaCtrl.errors == null || 'mismatch' in confirmSenhaCtrl.errors) {
      if (fbs.get('password').value !== confirmSenhaCtrl.value) {
        fbs.get('confirmedPassword').setErrors({ mismatch: true});
      } else {
        confirmSenhaCtrl.setErrors(null);
      }
    }
  }
}
