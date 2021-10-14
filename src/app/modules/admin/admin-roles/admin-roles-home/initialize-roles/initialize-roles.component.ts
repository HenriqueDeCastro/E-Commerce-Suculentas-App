import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { RoleService } from './../../../../../core/services/role/role.service';
import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/shared/enums/roles';
import { TextButton } from 'src/app/shared/enums/text-button';
import { IRole } from 'src/app/shared/models/irole';
import { switchMap } from 'rxjs/operators';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';

@Component({
  selector: 'app-initialize-roles',
  templateUrl: './initialize-roles.component.html',
  styleUrls: ['./initialize-roles.component.scss']
})
export class InitializeRolesComponent implements OnInit {

  public disableBtn: boolean = false;
  public txtBtn: string = TextButton.add;

  constructor(
    private roleService: RoleService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {}

  register() {
    this.disableBtn = true;
    this.txtBtn = TextButton.registering;
    const roleAdmin: IRole = { name: Roles.admin };

    this.roleService.post(roleAdmin).pipe(
      switchMap(() => {
        const roleManager: IRole = { name: Roles.manager };
        return this.roleService.post(roleManager)
      })
    ).subscribe(() => {
      this.snackbar.openSuccess(MessagesSnackbar.successful_registration);
    },
    error => {
      this.disableBtn = false;
      this.txtBtn = TextButton.add;
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }
}
