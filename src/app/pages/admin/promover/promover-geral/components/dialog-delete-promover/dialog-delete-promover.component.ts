import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-dialog-delete-promover',
  templateUrl: './dialog-delete-promover.component.html',
  styleUrls: ['./dialog-delete-promover.component.scss']
})
export class DialogDeletePromoverComponent implements OnInit {

  public User: IUser;
  public RoleName: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DialogDeletePromoverComponent>) { }

  ngOnInit() {
    this.ReceberUserRole();
  }

  ReceberUserRole(): void {
    if (this.data) {
      this.User = this.data.user;
      this.RoleName = this.data.roleName;
    }
  }

  FecharDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
