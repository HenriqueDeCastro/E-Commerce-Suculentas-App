import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoleService } from 'src/app/core/services/server/Role/Role.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IUser } from 'src/app/shared/models/IUser';
import { IUserByRole } from 'src/app/shared/models/IUserByrole';
import { IUserRole } from 'src/app/shared/models/IUserRole';

@Component({
  selector: 'app-list-delete-promover',
  templateUrl: './list-delete-promover.component.html',
  styleUrls: ['./list-delete-promover.component.scss']
})
export class ListDeletePromoverComponent implements OnInit {

  @Input() User: IUser;
  @Input() RoleName: string;
  @Output() Acao = new EventEmitter<boolean>();
  public Apagando: boolean = false;

  constructor(private roleService: RoleService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
  }

  Cancelar() {
    this.Acao.emit(false);
  }

  Deletar() {
    this.Apagando = true
    const userRole: IUserRole = {
      email: this.User.email,
      role: this.RoleName,
      delete: true
    }
    this.roleService.UpdateUserRole(userRole).subscribe((result: any) => {
      this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.DeletarConcluido);
      this.Apagando = false;
      this.Acao.emit(true);
    },
    erro => {
      console.log(erro);
      this.Apagando = false;
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

}
