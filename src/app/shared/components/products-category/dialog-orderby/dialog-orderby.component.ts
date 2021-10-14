import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-orderby',
  templateUrl: './dialog-orderby.component.html',
  styleUrls: ['./dialog-orderby.component.scss']
})
export class DialogOrderbyComponent implements OnInit {

  public company!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogOrderbyComponent>
  ) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    if (this.data) {
      this.company = this.data.company ?? false;
    }
  }

  closeDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
