import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-orderby',
  templateUrl: './dialog-orderby.component.html',
  styleUrls: ['./dialog-orderby.component.scss']
})
export class DialogOrderbyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DialogOrderbyComponent>) { }

  ngOnInit(): void {}

  FecharDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
