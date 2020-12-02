import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';

@Component({
  selector: 'app-geralProdutos',
  templateUrl: './geralProdutos.component.html',
  styleUrls: ['./geralProdutos.component.scss']
})
export class GeralProdutosComponent implements OnInit {

  Categorias: ICategoria[];

  constructor(private categoriaService: CategoriaService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberCategorias();
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllPagInicial().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }
}
