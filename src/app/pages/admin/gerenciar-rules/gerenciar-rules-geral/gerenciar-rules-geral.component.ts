import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/core/services/server/Role/Role.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IRole } from 'src/app/shared/models/IRole';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gerenciar-rules-geral',
  templateUrl: './gerenciar-rules-geral.component.html',
  styleUrls: ['./gerenciar-rules-geral.component.scss']
})
export class GerenciarRulesGeralComponent implements OnInit {

  public Roles: IRole[];
  public Registrando: boolean;

  constructor(private roleService: RoleService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
    this.progressBarService.Mostrar();
    this.VerificaRoles();
  }

  VerificaRoles(): void {
    this.roleService.GetRole().subscribe((roles: IRole[]) => {
      this.progressBarService.Mostrar();
      this.Roles = roles
    },
    error => {
      const erro = error.error;
      this.progressBarService.Mostrar();

      console.log(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    })
  }

  Registrar() {
    this.Registrando = true;
    this.progressBarService.Mostrar();

    const role: IRole = { name: environment.RoleAdmin };
    this.roleService.Post(role).subscribe(() => {
      const role2: IRole = { name: environment.RoleEmpresa };
      this.roleService.Post(role2).subscribe(() => {
        this.progressBarService.Mostrar();
        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
        this.VerificaRoles();
      },
      error => {
        this.progressBarService.Mostrar();
        this.Registrando = false;

        const erro = error.error;
        console.log(error);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroRoleAdmin);
      })
    },
    error => {
      this.Registrando = false;
      const erro = error.error;
      console.log(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroRoleAdmin);
    })
  }
}
