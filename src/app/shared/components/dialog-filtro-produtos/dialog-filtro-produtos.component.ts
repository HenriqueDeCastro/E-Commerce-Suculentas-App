import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-filtro-produtos',
  templateUrl: './dialog-filtro-produtos.component.html',
  styleUrls: ['./dialog-filtro-produtos.component.scss']
})
export class DialogFiltroProdutosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DialogFiltroProdutosComponent>,) { }

  ngOnInit(): void {}

  FecharDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
