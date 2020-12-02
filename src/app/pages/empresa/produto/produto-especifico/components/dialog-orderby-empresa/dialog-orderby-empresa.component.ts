import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-orderby-empresa',
  templateUrl: './dialog-orderby-empresa.component.html',
  styleUrls: ['./dialog-orderby-empresa.component.scss']
})
export class DialogOrderbyEmpresaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DialogOrderbyEmpresaComponent>) { }

  ngOnInit(): void {}

  FecharDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
