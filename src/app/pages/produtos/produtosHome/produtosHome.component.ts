import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produtosHome',
  templateUrl: './produtosHome.component.html',
  styleUrls: ['./produtosHome.component.scss']
})
export class ProdutosHomeComponent implements OnInit {

  Categorias: ICategoria[];
  link: string;

  constructor(public router: Router,
              private categoriaService: CategoriaService,
              private snackbar: SnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberCategorias();
    this.link = environment.UrlApi;
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllPagInicial().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
    });
  }

  NavegarCategoria(categoriaNome, categoriaId): void {
    this.router.navigate(['/produtos/' + categoriaId + '/' + categoriaNome]);
  }

  NavegarProduto(categoriaNome, produtoId, produtoNome): void {
    this.router.navigate(['/produtos/' + categoriaNome + '/' + produtoId + '/' + produtoNome]);
  }
}
