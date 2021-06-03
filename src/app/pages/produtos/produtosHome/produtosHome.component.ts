import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-produtosHome',
  templateUrl: './produtosHome.component.html',
  styleUrls: ['./produtosHome.component.scss']
})
export class ProdutosHomeComponent implements OnInit {

  Categorias: ICategoria[];

  constructor(private categoriaService: CategoriaService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.progressBarService.Mostrar();
    this.ReceberCategorias();
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllPagInicial().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
      this.progressBarService.Mostrar();
    },
    erro => {
      this.progressBarService.Mostrar();
      console.error(erro);

      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }
}
