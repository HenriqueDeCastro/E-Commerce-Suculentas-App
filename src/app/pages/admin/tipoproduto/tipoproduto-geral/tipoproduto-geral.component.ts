import { Component, OnInit } from '@angular/core';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';
import { TipoProdutoService } from '../../../../core/services/TipoProduto/TipoProduto.service';

@Component({
  selector: 'app-tipoproduto-geral',
  templateUrl: './tipoproduto-geral.component.html',
  styleUrls: ['./tipoproduto-geral.component.scss']
})
export class TipoprodutoGeralComponent implements OnInit {

  public TipoProdutos: ITipoProduto[];

  constructor(private tipoProdutoService: TipoProdutoService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberCategorias();
  }

  ReceberCategorias(): void {
    this.tipoProdutoService.GetAllSemProduto().subscribe((tipoCategorias: ITipoProduto[]) => {
      this.TipoProdutos = tipoCategorias;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

}
