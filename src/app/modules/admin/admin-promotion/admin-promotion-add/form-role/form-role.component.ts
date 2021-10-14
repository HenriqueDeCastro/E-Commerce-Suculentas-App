import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IRole } from 'src/app/shared/models/irole';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss']
})
export class FormRoleComponent implements OnInit {

  @Input() roles!: IRole[];
  @Input() disableBtn: boolean = false;
  @Input() txtBtn!: string;
  @Output() roleNameReturn = new EventEmitter<string>();
  public roleForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.roleForm = this.fb.group({
      roles: [null, [Validators.required]]
    });
  }

  return(): void {
    if(this.roleForm.valid) {
      this.roleNameReturn.emit(this.roleForm.get('roles')?.value);
    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields)
    }
  }
}
