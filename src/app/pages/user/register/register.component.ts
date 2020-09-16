import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/Auth.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IUser } from '../../../shared/models/IUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public DadosForm: FormGroup;
  public ContatosForm: FormGroup;
  public SenhaForm: FormGroup;
  public Registrando = false;
  private User: IUser;
  step = 0;

  constructor(private fb: FormBuilder,
              public router: Router,
              private authService: AuthService,
              private snackbar: SnackbarComponent) { }

  ngOnInit(): void {
    this.ValidationDados();
    this.ValidationContatos();
    this.ValidationSenha();
  }

  ValidationDados(): void {
    this.DadosForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dataNascimento: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  ValidationContatos(): void {
    this.ContatosForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ValidationSenha(): void {
    this.SenhaForm = this.fb.group({
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', Validators.required]
      }, { validator: this.CompararSenhas })
    });
  }

  Registrar(): void {
    if (this.DadosForm.valid && this.ContatosForm.valid && this.SenhaForm.valid) {
      this.Registrando = true;
      this.User = {
        fullName: this.DadosForm.value.fullname,
        cpf: this.DadosForm.value.cpf,
        dataNascimento: `${this.DadosForm.value.dataNascimento}`,
        phoneNumber: this.ContatosForm.value.phoneNumber,
        email: this.ContatosForm.value.email,
        password: this.SenhaForm.get('passwords.password').value,
        confirmedPassword: this.SenhaForm.get('passwords.confirmedPassword').value
      };
      this.authService.Register(this.User).subscribe(
        () => {
          this.Registrando = false;
          this.snackbar.OpenSnackBarSuccess('Cadastrado realizado com sucesso');
          this.router.navigate(['/produtos']);
        },
        error => {
          this.Registrando = false;
          const erro = error.error;
          switch (erro) {
            case 'DuplicateUserName':
              this.snackbar.OpenSnackBarError('E-mail informado já possui cadastro !!!');
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

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

}
