import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { RoleService } from 'src/app/core/services/server/Role/Role.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IRole } from 'src/app/shared/models/IRole';
import { IUser } from 'src/app/shared/models/IUser';
import { IUserRole } from 'src/app/shared/models/IUserRole';

@Component({
  selector: 'app-promover-add',
  templateUrl: './promover-add.component.html',
  styleUrls: ['./promover-add.component.scss']
})
export class PromoverAddComponent implements OnInit {

  public Roles: IRole[];
  public User: IUser;
  public UserForm: FormGroup;
  public RoleForm: FormGroup;
  public Pesquisando: boolean = false;
  public RealizandoCadastro: boolean = false;

  constructor(private roleService: RoleService,
              private authService: AuthService,
              private fb: FormBuilder,
              public router: Router,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
    this.ReceberRoles();
    this.ValidationUser();
    this.ValidationRole();
  }

  ReceberRoles(): void {
    this.progressBarService.Mostrar(true);
    this.roleService.GetRole().subscribe((roles: IRole[]) => {
      this.Roles = roles
      this.progressBarService.Mostrar(false);
    },
    error => {
      const erro = error.error;
      console.error(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    })
  }

  ValidationUser(): void {
    this.UserForm = this.fb.group({
      user: ['', [Validators.required, Validators.email]]
    });
  }


  ValidationRole(): void {
    this.RoleForm = this.fb.group({
      roles: [null, [Validators.required]]
    });
  }

  ProcurarUsuario() {
    if(this.UserForm.valid) {
      this.Pesquisando = true;
      this.authService.GetUserByEmail(this.UserForm.value.user).subscribe((user: IUser) => {
        this.Pesquisando = false;
        this.UserForm.controls["user"].disable();
        this.User = user;
      },
      error => {
        const erro = error.error;
        this.Pesquisando = false;
        switch (erro.status) {
          case 404:
            this.snackbar.OpenSnackBarError(this.mensagemSnackbar.EmailNaoEncontrado);
            break;
          default:
            this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
            console.error(error);
            break;
        }
      }
    );
    }
  }

  AlterarUser() {
    this.UserForm.controls["user"].enable();
    this.User = null;
  }

  Promover() {
    if(this.User && this.RoleForm.valid) {
      this.progressBarService.Mostrar(true);
      this.RealizandoCadastro = true;
      const userRole: IUserRole = {
        email: this.User.email,
        role: this.RoleForm.value.roles,
        delete: false
      };
      this.roleService.UpdateUserRole(userRole).subscribe(() => {
        this.RealizandoCadastro = false;
        this.progressBarService.Mostrar(false);
        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
        this.router.navigate(['/admin/promover/geral']);
      },
      erro => {
        console.error(erro);
        this.RealizandoCadastro = false;
        this.progressBarService.Mostrar(false);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      }
    );
    }else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
