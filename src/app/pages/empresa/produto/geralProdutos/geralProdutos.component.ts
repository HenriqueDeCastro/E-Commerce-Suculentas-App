import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { ProdutoService } from 'src/app/core/services/Produto/Produto.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';

@Component({
  selector: 'app-geralProdutos',
  templateUrl: './geralProdutos.component.html',
  styleUrls: ['./geralProdutos.component.scss']
})
export class GeralProdutosComponent implements OnInit {

  Categorias: ICategoria[];

  constructor(public router: Router,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private snackbar: SnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberCategorias();
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAll().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
      console.log(this.Categorias)
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
    });
  }

}
