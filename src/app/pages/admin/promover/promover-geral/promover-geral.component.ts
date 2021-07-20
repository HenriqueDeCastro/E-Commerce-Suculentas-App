import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { RoleService } from 'src/app/core/services/server/Role/Role.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IRole } from 'src/app/shared/models/IRole';
import { IUser } from 'src/app/shared/models/IUser';
import { IUserByRole } from '../../../../shared/models/IUserByRole';
import { BottomDeletePromoverComponent } from './components/bottom-delete-promover/bottom-delete-promover.component';
import { DialogDeletePromoverComponent } from './components/dialog-delete-promover/dialog-delete-promover.component';

@Component({
  selector: 'app-promover-geral',
  templateUrl: './promover-geral.component.html',
  styleUrls: ['./promover-geral.component.scss']
})
export class PromoverGeralComponent implements OnInit {

  public Roles: IRole[] = [];
  public Users: IUserByRole[] = [];
  public Carregou: boolean = false;

  constructor(private authService: AuthService,
              private roleService: RoleService,
              private snackbar: SnackbarService,
              public dialog: MatDialog,
              private bottomSheet: MatBottomSheet,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
    this.progressBarService.Mostrar(true);
    this.ReceberRoles();
  }

  ReceberRoles(): void {
    this.roleService.GetRole().subscribe((roles: IRole[]) => {
      this.Roles = roles;
      this.ReceberUsuariosPorRole();
    },
    error => {
      this.progressBarService.Mostrar(false);
      const erro = error.error;
      console.error(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    })
  }

  ReceberUsuariosPorRole() {
    this.Roles.forEach((role: IRole) => {
      this.authService.GetUserByRole(role.name).subscribe((users: IUser[]) => {
        const aux: IUserByRole = {
          roleName: role.name,
          users: users
        }
        this.Users.push(aux);
      },
      error => {
        const erro = error.error;
        console.error(error);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      })
    });

    this.progressBarService.Mostrar(false);
    this.Carregou = true;
  }

  OpenDialog(user: IUser, rolename: string): void {
    const dialogRef = this.dialog.open(DialogDeletePromoverComponent, {
      data: {
        user: user,
        roleName: rolename
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ResultDelete(result);
    });
  }

  openBottomSheet(user: IUser, rolename: string): void {
    const bottomSheetRef = this.bottomSheet.open(BottomDeletePromoverComponent, {
      data: {
        user: user,
        roleName: rolename
      }
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.ResultDelete(result);
    });
  }

  ResultDelete(result: boolean) {
    if(result) {
      this.Users = [];
      this.ReceberUsuariosPorRole();
    }
  }
}
