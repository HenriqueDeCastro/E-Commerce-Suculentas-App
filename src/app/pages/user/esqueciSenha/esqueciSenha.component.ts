import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/Auth.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IEsqueciSenha } from 'src/app/shared/models/IEsqueciSenha';

@Component({
  selector: 'app-esqueciSenha',
  templateUrl: './esqueciSenha.component.html',
  styleUrls: ['./esqueciSenha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  public EsqueciForm: FormGroup;
  public EnviandoRequisicao = false;
  public EsqueciObjeto: IEsqueciSenha;

  constructor(private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarComponent) { }

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
      this.EsqueciObjeto = {
        email: this.EsqueciForm.value.email
      };
      this.authService.EsqueciSenha(this.EsqueciObjeto).subscribe(
        () => {
          this.EnviandoRequisicao = false;
          this.snackbar.OpenSnackBarSuccess('Verifique sua caixa de e-mail')
          this.router.navigate(['/user/login']);
        },
        error => {
          this.EnviandoRequisicao = false;
          const erro = error.error;
          console.log(error);
          switch (erro) {
            case 'Usuario não encontrado!':
              this.snackbar.OpenSnackBarError('Não foi encontrado o e-mail informado !!!');
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
