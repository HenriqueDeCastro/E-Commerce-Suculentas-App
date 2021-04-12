import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { IEsqueciSenha } from 'src/app/shared/models/IEsqueciSenha';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-esqueciSenha',
  templateUrl: './esqueciSenha.component.html',
  styleUrls: ['./esqueciSenha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  public EsqueciForm: FormGroup;
  public EnviandoRequisicao = false;
  public EsqueciObjeto: IEsqueciSenha;
  public TextoBotao = "Enviar"

  constructor(private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.Validation();
  }

  Validation(): void {
    this.EsqueciForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  EsqueciSenha(): void {
    if (this.EsqueciForm.valid) {
      this.EnviandoRequisicao = true;
      this.progressBarService.Mostrar();
      this.TextoBotao = "Enviando";

      this.EsqueciObjeto = {
        email: this.EsqueciForm.value.email
      };
      this.authService.EsqueciSenha(this.EsqueciObjeto).subscribe(
        () => {
          this.progressBarService.Mostrar();

          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.VerificarCaixaEmail);
          this.router.navigate(['/user/login']);
        },
        error => {
          this.progressBarService.Mostrar();
          this.EnviandoRequisicao = false;
          this.TextoBotao = "Enviar";

          const erro = error.error;
          console.log(error);
          switch (erro) {
            case 'Usuario não encontrado!':
              this.snackbar.OpenSnackBarError(this.mensagemSnackbar.EmailNaoEncontrado);
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
