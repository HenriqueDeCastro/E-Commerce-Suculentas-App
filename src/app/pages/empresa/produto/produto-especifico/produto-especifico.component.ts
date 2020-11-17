import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { FiltroProdutosComponent } from 'src/app/shared/components/filtro-produtos/filtro-produtos.component';
import { ResetScrollComponent } from 'src/app/shared/components/reset-scroll/reset-scroll.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { environment } from 'src/environments/environment';

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
              private resetScroll: ResetScrollComponent) { }

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
    this.bottomSheet.open(FiltroProdutosComponent);
  }

  onChangePage(evento: any): void {
    this.pages = evento;
    this.resetScroll.PositionZero();
  }
}
