import { RoleService } from './../../../../core/services/role/role.service';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { IRole } from 'src/app/shared/models/irole';
import { IUser } from 'src/app/shared/models/iuser';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TextButton } from 'src/app/shared/enums/text-button';
import { IUserRole } from 'src/app/shared/models/iuser-role';

@Component({
  selector: 'app-admin-promotion-add',
  templateUrl: './admin-promotion-add.component.html',
  styleUrls: ['./admin-promotion-add.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AdminPromotionAddComponent implements OnInit {

  public user!: IUser;
  public roles!: IRole[];
  public roleName!: string;
  public txtFinish: string = TextButton.finish;
  public disableFinish: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackbar: SnackbarService,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.roles = this.activatedRoute.snapshot.data['roles'];
    })
  }

  userValue(userReturn: IUser): void {
    this.user = userReturn;
  }

  roleValue(roleNameReturn: string): void {
    this.roleName = roleNameReturn;
    this.promote()
  }

  promote() {
    if(this.user && this.roleName) {

      this.disableFinish = true;
      this.txtFinish = TextButton.registering;

      const userRole: IUserRole = {
        email: this.user.email ?? '',
        role: this.roleName,
        delete: false
      };

      this.roleService.updateUserRole(userRole).subscribe(() => {
        this.snackbar.openSuccess(MessagesSnackbar.successful_registration);
        this.router.navigate(['/admin/promotion/home']);
      },
      error => {
        this.disableFinish = false;
        this.txtFinish = TextButton.finish;
        this.snackbar.openError(MessagesSnackbar.server_error);
      }
    );
    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }
}
