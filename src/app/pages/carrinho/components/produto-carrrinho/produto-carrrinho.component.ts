import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';
import { DialogEditCarrinhoComponent } from '../dialog-edit-carrinho/dialog-edit-carrinho.component';
import { BottoomEditCarrinhoComponent } from '../bottoom-edit-carrinho/bottoom-edit-carrinho.component';

@Component({
  selector: 'app-produto-carrrinho',
  templateUrl: './produto-carrrinho.component.html',
  styleUrls: ['./produto-carrrinho.component.scss']
})
export class ProdutoCarrrinhoComponent implements OnInit {

  public link: string;
  @Input() produto: IProdutoCarrinho;
  @Output() atualizacao = new EventEmitter<boolean>();

  constructor(private router: Router,
              public dialog: MatDialog,
              private snackbar: SnackbarComponent,
              private bottomSheet: MatBottomSheet,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
  }

  Navegar(): void {
    this.router.navigate(['/produtos/' + this.produto.categoriaId  + '/' + this.produto.id + '/' + this.produto.nome]);
  }

  OpenDialog(produtoCarrinho: IProdutoCarrinho): void {
    const dialogRef = this.dialog.open(DialogEditCarrinhoComponent, {
      data: {
        produto: produtoCarrinho
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ResultEdit(result);
    });
  }

  openBottomSheet(produtoCarrinho: IProdutoCarrinho): void {
    const bottomSheetRef = this.bottomSheet.open(BottoomEditCarrinhoComponent, {
      data: {
        produto: produtoCarrinho
      }
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.ResultEdit(result);
    });
  }

  ResultEdit(result: string): void {
    if (result === 'Removido') {
      this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.ProdutoRemovidoCarrinho);
      this.atualizacao.emit(true);
    }
    if (result === 'Editado') {
      this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.ProdutoSalvoCarrinho);
      this.atualizacao.emit(true);
    }
  }
}
