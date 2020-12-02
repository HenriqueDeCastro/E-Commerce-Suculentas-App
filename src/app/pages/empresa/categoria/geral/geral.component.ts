import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
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

  constructor(private categoriaService: CategoriaService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

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
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
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
}
