import { IRole } from './../../../../shared/models/irole';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { RoleService } from './../../../../core/services/role/role.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-admin-roles-add',
  templateUrl: './admin-roles-add.component.html',
  styleUrls: ['./admin-roles-add.component.scss']
})
export class AdminRolesAddComponent implements OnInit {

  public roleForm!: FormGroup;
  public txtBtn: string = TextButton.add;
  public disableBtn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private router: Router,
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.validation()
  }

  validation(): void {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  registrar() {
    if(this.roleForm.valid) {
      this.disableBtn = true;
      this.txtBtn = TextButton.registering;

      const role: IRole = {
        name: this.roleForm.get('name')?.value ?? ''
      }

      this.roleService.post(role).subscribe(() => {
        this.snackbar.openSuccess(MessagesSnackbar.successful_registration);
        this.router.navigate(['admin/roles'])
      },
      errror => {
        this.disableBtn = false;
        this.txtBtn = TextButton.add;
        this.snackbar.openError(MessagesSnackbar.server_error);
      })

    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }
}
