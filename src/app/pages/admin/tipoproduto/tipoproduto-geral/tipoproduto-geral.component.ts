import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../../../core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from '../../../../core/services/shared/Mensagens/Mensagens.service';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';
import { TipoProdutoService } from '../../../../core/services/server/TipoProduto/TipoProduto.service';

@Component({
  selector: 'app-tipoproduto-geral',
  templateUrl: './tipoproduto-geral.component.html',
  styleUrls: ['./tipoproduto-geral.component.scss']
})
export class TipoprodutoGeralComponent implements OnInit {

  public TipoProdutos: ITipoProduto[];

  constructor(private tipoProdutoService: TipoProdutoService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService) { }

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
