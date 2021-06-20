import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { SnackbarService } from '../../../../core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from '../../../../core/services/shared/Mensagens/Mensagens.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

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
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.progressBarService.Mostrar(true);
    this.ReceberCategorias();
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllSemProduto().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
      this.SepararCategorias(this.Categorias);
    },
    erro => {
    this.progressBarService.Mostrar(false);
      console.error(erro);

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
    this.progressBarService.Mostrar(false);
  }
}
