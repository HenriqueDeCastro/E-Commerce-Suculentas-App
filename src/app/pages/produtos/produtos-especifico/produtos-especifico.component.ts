import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { BottomOrderbyComponent} from './components/bottom-orderby/bottom-orderby.component';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { ResetScrollService } from 'src/app/core/services/shared/ResetScroll/ResetScroll.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOrderbyComponent } from './components/dialog-orderby/dialog-orderby.component';
import { IProduto } from 'src/app/shared/models/IProduto';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { ICategoriaPagination } from 'src/app/shared/models/ICategoriaPagination';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-produtos-especifico',
  templateUrl: './produtos-especifico.component.html',
  styleUrls: ['./produtos-especifico.component.scss']
})
export class ProdutosEspecificoComponent implements OnInit {

  public Produtos: IProduto[];
  public CategoriaId: number;
  public Categoria: ICategoria;
  public OrderBy: string;
  public PaginaAtual = 0;
  public UltimaPagina = false;
  public Search: string;
  public open = false;

  constructor(private activetedRoute: ActivatedRoute,
              private categoriaService: CategoriaService,
              private bottomSheet: MatBottomSheet,
              private snackbar: SnackbarService,
              private resetScroll: ResetScrollService,
              public dialog: MatDialog,
              public router: Router,
              public progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) {}

  ngOnInit(): void {
    this.ReceberValorRota();
    this.GetProdutos();
  }

  ReceberValorRota(): void {
    this.CategoriaId = this.activetedRoute.snapshot.params.categoriaId;
    this.activetedRoute.queryParams.subscribe(params => this.OrderBy = params.orderBy);
    this.activetedRoute.queryParams.subscribe(params => this.Search = params.search? params.search : '');

  }

  VerMais() {
    this.PaginaAtual++;
    this.GetProdutos();
  }

  GetProdutos(voltando: boolean = false) {
    this.progressBarService.Mostrar(true);

    this.categoriaService.GetByCliente(this.CategoriaId, this.PaginaAtual, this.OrderBy, this.Search).subscribe((categoriaPagination: ICategoriaPagination) => {

      let OrderByQueryString:string;
      let SearchQueryString: string;
      this.activetedRoute.queryParams.subscribe(params => OrderByQueryString = params.orderBy);
      this.activetedRoute.queryParams.subscribe(params => SearchQueryString = params.search? params.search : '');

      if(this.Search != SearchQueryString)
        this.ChangePage();

      if(this.Produtos == undefined || voltando == true) {
        this.Produtos = categoriaPagination.produtos;
      }
      else if(this.OrderBy != OrderByQueryString || this.Search != SearchQueryString) {
        this.Produtos = categoriaPagination.produtos;
        this.PaginaAtual = 0;
        this.ChangePage();
        this.resetScroll.PositionZero();
      }
      else {
        this.Produtos = this.Produtos.concat(categoriaPagination.produtos);
      }

      this.UltimaPagina = categoriaPagination.ultimaPagina;
      this.Categoria = categoriaPagination.categoria;

      this.progressBarService.Mostrar(false);
    },
    erro => {
      this.progressBarService.Mostrar(false);
      console.error(erro);

      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  openAccordion(): void {
    this.open = !this.open;
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(BottomOrderbyComponent);
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.OrderByResult(result);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOrderbyComponent, {
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.OrderByResult(result);
    });
  }

  OrderByResult(result: any) {
    if(result) {
      this.OrderBy = result;
      this.PaginaAtual = 0;
      this.GetProdutos();
    }
  }

  receberPesquisa(event) {
    this.Search = event;
    this.GetProdutos()
  }

  ChangePage() {
    this.router.navigate([], { queryParams: { orderBy: this.OrderBy, search: this.Search } });
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.Produtos = undefined;
    this.PaginaAtual = 0;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ReceberValorRota();
        this.GetProdutos(true);
      }
    });

  }
}
