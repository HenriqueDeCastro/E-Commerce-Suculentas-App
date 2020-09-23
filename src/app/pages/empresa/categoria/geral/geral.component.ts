import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.scss']
})
export class GeralComponent implements OnInit {

  public Categorias: ICategoria[];
  public CategoriasAtivas: ICategoria[] = [];
  public CategoriasInativas: ICategoria[] = [];

  constructor(public router: Router,
              private categoriaService: CategoriaService,
              private snackbar: SnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberCategorias();
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllSemProduto().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
      this.SepararCategorias(this.Categorias);
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
    });
  }

  SepararCategorias(categorias: ICategoria[]): void {
    categorias.forEach((categoria: ICategoria) => {
      if (categoria.ativo) {
        this.CategoriasAtivas.push(categoria);
      } else {
        this.CategoriasInativas.push(categoria);
      }
    });
  }

  Navegar(categoriaNome, categoriaId): void {
    this.router.navigate(['/empresa/categoria/editar/' + categoriaId + '/' + categoriaNome]);
  }
}
