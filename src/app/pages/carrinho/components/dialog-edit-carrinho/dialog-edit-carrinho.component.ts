import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';

@Component({
  selector: 'app-dialog-edit-carrinho',
  templateUrl: './dialog-edit-carrinho.component.html',
  styleUrls: ['./dialog-edit-carrinho.component.scss']
})
export class DialogEditCarrinhoComponent implements OnInit {

  Produto: IProdutoCarrinho;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DialogEditCarrinhoComponent>) { }

  ngOnInit(): void {
    this.ReceberProduto();
  }

  ReceberProduto(): void {
    if (this.data) {
      this.Produto = this.data.produto;
    }
  }

  FecharDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
