import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';

@Component({
  selector: 'app-bottoom-edit-carrinho',
  templateUrl: './bottoom-edit-carrinho.component.html',
  styleUrls: ['./bottoom-edit-carrinho.component.scss']
})
export class BottoomEditCarrinhoComponent implements OnInit {

  Produto: IProdutoCarrinho;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
              private bottomSheetRef: MatBottomSheetRef<BottoomEditCarrinhoComponent>) { }

  ngOnInit(): void {
    this.ReceberProduto();
  }

  ReceberProduto(): void {
    if (this.data) {
      this.Produto = this.data.produto;
    }
  }

  FecharBottoom(value: string): void{
    this.bottomSheetRef.dismiss(value);
  }
}
