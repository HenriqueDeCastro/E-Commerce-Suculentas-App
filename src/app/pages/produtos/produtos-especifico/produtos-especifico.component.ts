import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { FiltroProdutosComponent } from 'src/app/shared/components/filtro-produtos/filtro-produtos.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { ResetScrollComponent } from '../../../shared/components/reset-scroll/reset-scroll.component';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogFiltroProdutosComponent } from '../../../shared/components/dialog-filtro-produtos/dialog-filtro-produtos.component';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-produtos-especifico',
  templateUrl: './produtos-especifico.component.html',
  styleUrls: ['./produtos-especifico.component.scss']
})
export class ProdutosEspecificoComponent implements OnInit {

  private CategoriaId: number;
  public Categoria: ICategoria;
  public link: string;
  public pages = 1;
  public open = false;
  public filter = '';

  constructor(private activetedRoute: ActivatedRoute,
              private categoriaService: CategoriaService,
              private bottomSheet: MatBottomSheet,
              private snackbar: SnackbarComponent,
              private resetScroll: ResetScrollComponent,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.ReceberValorRota();
    this.ReceberCategoria();
  }

  ReceberValorRota(): void {
    this.CategoriaId = this.activetedRoute.snapshot.params.categoriaId;
  }

  ReceberCategoria(): void {
    this.categoriaService.GetById(this.CategoriaId).subscribe((categoria: ICategoria) => {
      this.Categoria = categoria;
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
    bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
      if (dataFromChild === 'Alfabetica') {
        this.Categoria.produtos.sort((a, b) => a.nome > b.nome ? 1 : -1);
        this.pages = 1;
      }
      if (dataFromChild === 'Preço maior para menor') {
        this.Categoria.produtos.sort((a, b) => a.preco < b.preco ? 1 : -1);
        this.pages = 1;
      }
      if (dataFromChild === 'Preço menor para maior') {
        this.Categoria.produtos.sort((a, b) => a.preco > b.preco ? 1 : -1);
        this.pages = 1;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFiltroProdutosComponent, {
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Alfabetica') {
        this.Categoria.produtos.sort((a, b) => a.nome > b.nome ? 1 : -1);
        this.pages = 1;
      }
      if (result === 'Preço maior para menor') {
        this.Categoria.produtos.sort((a, b) => a.preco < b.preco ? 1 : -1);
        this.pages = 1;
      }
      if (result === 'Preço menor para maior') {
        this.Categoria.produtos.sort((a, b) => a.preco > b.preco ? 1 : -1);
        this.pages = 1;
      }
    });
  }

  onChangePage(evento: any): void {
    this.pages = evento;
    this.resetScroll.PositionZero();
  }
}
