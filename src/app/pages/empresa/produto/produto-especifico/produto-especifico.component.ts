import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { FiltroNomeService } from 'src/app/core/services/shared/FiltroNome/FiltroNome.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ResetScrollService } from 'src/app/core/services/shared/ResetScroll/ResetScroll.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { IProduto } from 'src/app/shared/models/IProduto';
import { environment } from 'src/environments/environment';
import { BottomOrderbyEmpresaComponent } from './components/bottom-orderby-empresa/bottom-orderby-empresa.component';
import { DialogOrderbyEmpresaComponent } from './components/dialog-orderby-empresa/dialog-orderby-empresa.component';

@Component({
  selector: 'app-produto-especifico',
  templateUrl: './produto-especifico.component.html',
  styleUrls: ['./produto-especifico.component.scss']
})
export class ProdutoEspecificoComponent implements OnInit {

  public CategoriaId: number;
  public Categoria: ICategoria;
  public Carregando: boolean = true;
  public link: string;
  public pages = 1;
  public open = false;
  public filter = '';
  public Produtos: IProduto[];

  constructor(private activetedRoute: ActivatedRoute,
              private categoriaService: CategoriaService,
              private bottomSheet: MatBottomSheet,
              private snackbar: SnackbarService,
              private resetScroll: ResetScrollService,
              public dialog: MatDialog,
              private filtroNome: FiltroNomeService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.ReceberValorRota();
    this.ReceberCategoria();
  }

  ReceberValorRota(): void {
    this.CategoriaId = this.activetedRoute.snapshot.params.categoriaId;
  }

  ReceberCategoria(): void {
    this.categoriaService.GetByIdEmpresa(this.CategoriaId).subscribe((categoria: ICategoria) => {
      if(categoria) {
        this.Categoria = categoria;
        this.Produtos = this.Categoria.produtos;
        this.Carregando = false;
      } else {
        this.Carregando = false;
      }
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  openAccordion(): void {
    this.open = !this.open;
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(BottomOrderbyEmpresaComponent);
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.resultOrderBy(result);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOrderbyEmpresaComponent, {
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
    if (result === 'Estoque') {
      this.Categoria.produtos.sort((a, b) => a.estoque > b.estoque ? 1 : -1);
      this.Produtos = this.filtroNome.transform(this.Categoria.produtos, this.filter);
      this.pages = 1;
    }
  }

  onChangePage(evento: any): void {
    this.pages = evento;
    this.resetScroll.PositionZero();
  }
}
