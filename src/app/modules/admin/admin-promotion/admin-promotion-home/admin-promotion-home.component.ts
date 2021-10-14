import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { RoleService } from './../../../../core/services/role/role.service';
import { IRoleByUser } from 'src/app/shared/models/irole-by-user';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmRelegationComponent } from './dialog-confirm-relegation/dialog-confirm-relegation.component';
import { IUserRole } from 'src/app/shared/models/iuser-role';

@Component({
  selector: 'app-admin-promotion-home',
  templateUrl: './admin-promotion-home.component.html',
  styleUrls: ['./admin-promotion-home.component.scss']
})
export class AdminPromotionHomeComponent implements OnInit {

  public roles!: IRoleByUser[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private roleService: RoleService,
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.receiveRoles();
  }

  receiveRoles() {
    this.activatedRoute.params.subscribe((params) => {
      this.roles = this.activatedRoute.snapshot.data['rolesByUser'];
    })
  }

  openDialog(roleName: string, userEmail: string|undefined): void {
    const dialogRef = this.dialog.open(DialogConfirmRelegationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.delete(roleName, userEmail)
      }
    });
  }

  delete(roleName: string, userEmail: string|undefined): void {
    const userRole: IUserRole = {
      email: userEmail ?? '',
      role: roleName,
      delete: true
    }

    this.roleService.updateUserRole(userRole).subscribe((result: any) => {

      this.snackbar.openSuccess(MessagesSnackbar.delete_completed);
      this.router.navigate([]).finally(() => {
        this.receiveRoles()
      })
    },
    erro => {
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }
}
