import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { FiltroProdutosComponent } from 'src/app/shared/components/filtro-produtos/filtro-produtos.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { ResetScrollComponent } from '../../../shared/components/reset-scroll/reset-scroll.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogFiltroProdutosComponent } from '../../../shared/components/dialog-filtro-produtos/dialog-filtro-produtos.component';
import { FiltroNomeComponent } from '../../../shared/components/filtro-nome/filtro-nome.component';
import { IProduto } from 'src/app/shared/models/IProduto';

@Component({
  selector: 'app-produtos-especifico',
  templateUrl: './produtos-especifico.component.html',
  styleUrls: ['./produtos-especifico.component.scss']
})
export class ProdutosEspecificoComponent implements OnInit {

  public CategoriaId: number;
  public Categoria: ICategoria;
  public link: string;
  public pages = 1;
  public open = false;
  public filter = '';
  public Produtos: IProduto[];

  constructor(private activetedRoute: ActivatedRoute,
              private categoriaService: CategoriaService,
              private bottomSheet: MatBottomSheet,
              private snackbar: SnackbarComponent,
              private resetScroll: ResetScrollComponent,
              public dialog: MatDialog,
              private filtroNome: FiltroNomeComponent) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.ReceberCategoria();
  }

  ReceberValorRota(): void {
    this.CategoriaId = this.activetedRoute.snapshot.params.categoriaId;
  }

  ReceberCategoria(): void {
    this.categoriaService.GetById(this.CategoriaId).subscribe((categoria: ICategoria) => {
      this.Categoria = categoria;
      this.Produtos = this.Categoria.produtos;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
    });
  }

  openAccordion(): void {
    this.open = !this.open;
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(FiltroProdutosComponent);
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.resultOrderBy(result);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFiltroProdutosComponent, {
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.resultOrderBy(result);
    });
  }

  receberFiltro(valor: string): void {
    this.filter = valor;
    if (this.filter === '') {
      this.Produtos = this.Categoria.produtos;
    } else {
      this.Produtos = this.filtroNome.transform(this.Categoria.produtos, this.filter);
    }
  }

  resultOrderBy(result: string): void {
    if (result === 'Alfabetica') {
      this.Categoria.produtos.sort((a, b) => a.nome > b.nome ? 1 : -1);
      this.Produtos = this.filtroNome.transform(this.Categoria.produtos, this.filter);
      this.pages = 1;
    }
    if (result === 'Preço maior para menor') {
      this.Categoria.produtos.sort((a, b) => a.preco < b.preco ? 1 : -1);
      this.Produtos = this.filtroNome.transform(this.Categoria.produtos, this.filter);
      this.pages = 1;
    }
    if (result === 'Preço menor para maior') {
      this.Categoria.produtos.sort((a, b) => a.preco > b.preco ? 1 : -1);
      this.Produtos = this.filtroNome.transform(this.Categoria.produtos, this.filter);
      this.pages = 1;
    }
  }

  onChangePage(evento: any): void {
    this.pages = evento;
    this.resetScroll.PositionZero();
  }
}
