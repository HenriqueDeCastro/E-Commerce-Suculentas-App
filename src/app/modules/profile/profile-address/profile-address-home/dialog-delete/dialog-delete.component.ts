import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  public addressId!: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogDeleteComponent>
  ) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    if (this.data) {
      this.addressId = this.data.id;
    }
  }

  closeDialog(value: boolean): void{
    this.dialogRef.close(value);
  }
}
