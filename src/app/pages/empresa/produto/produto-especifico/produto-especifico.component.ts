import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { FiltroProdutosEmpresaComponent } from 'src/app/shared/components/filtro-produtos-empresa/filtro-produtos-empresa.component';
import { ResetScrollComponent } from 'src/app/shared/components/reset-scroll/reset-scroll.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { environment } from 'src/environments/environment';
import { DialogFiltroProdutosEmpresaComponent } from '../../../../shared/components/dialog-filtro-produtos-empresa/dialog-filtro-produtos-empresa.component'

@Component({
  selector: 'app-produto-especifico',
  templateUrl: './produto-especifico.component.html',
  styleUrls: ['./produto-especifico.component.scss']
})
export class ProdutoEspecificoComponent implements OnInit {

  private CategoriaId: number;
  public Categoria: ICategoria;
  link: string;
  public pages = 1;

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

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(FiltroProdutosEmpresaComponent);
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
      if (dataFromChild === 'Estoque') {
        this.Categoria.produtos.sort((a, b) => a.estoque > b.estoque ? 1 : -1);
        this.pages = 1;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFiltroProdutosEmpresaComponent, {
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
      if (result === 'Estoque') {
        this.Categoria.produtos.sort((a, b) => a.estoque > b.estoque ? 1 : -1);
        this.pages = 1;
      }
    });
  }

  onChangePage(evento: any): void {
    this.pages = evento;
    this.resetScroll.PositionZero();
  }

  ColorEstoque(estoque: number): string {
    if (estoque === 0) {
      return 'zerado';
    }
    if (estoque > 0 && estoque < 4) {
      return 'pouco';
    }
    if (estoque >= 4) {
      return 'otimo';
    }
  }
}
