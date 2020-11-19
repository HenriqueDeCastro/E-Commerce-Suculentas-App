import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-filtro-produtos-empresa',
  templateUrl: './dialog-filtro-produtos-empresa.component.html',
  styleUrls: ['./dialog-filtro-produtos-empresa.component.scss']
})
export class DialogFiltroProdutosEmpresaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DialogFiltroProdutosEmpresaComponent>,) { }

  ngOnInit(): void {}

  FecharDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
