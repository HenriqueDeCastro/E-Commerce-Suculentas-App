import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/Auth.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IResetSenha } from '../../../shared/models/IResetSenha';

@Component({
  selector: 'app-resetSenha',
  templateUrl: './resetSenha.component.html',
  styleUrls: ['./resetSenha.component.scss']
})
export class ResetSenhaComponent implements OnInit {

  Token: string;
  Email: string;
  public SenhaForm: FormGroup;
  public Registrando = false;
  Reset: IResetSenha;

  constructor(private activetedRoute: ActivatedRoute,
              private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarComponent) { }

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
      this.Registrando = true;
      this.Reset = {
        token: this.Token,
        email: this.Email,
        password: this.SenhaForm.get('passwords.password').value,
        confirmedPassword: this.SenhaForm.get('passwords.confirmedPassword').value
      };
      this.authService.ResetSenha(this.Reset). subscribe((model: any) => {
        this.Registrando = false;
        this.snackbar.OpenSnackBarSuccess('Senha redefinida com sucesso');
        this.router.navigate(['/user/login']);
      },
      (error) => {
        this.Registrando = false;
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
    } else {
      this.snackbar.OpenSnackBarError('Nem todos os campos foram preenchidos');

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
