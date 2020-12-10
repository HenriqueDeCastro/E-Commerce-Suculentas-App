import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/core/services/Produto/Produto.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IProduto } from 'src/app/shared/models/IProduto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produto-unitario',
  templateUrl: './produto-unitario.component.html',
  styleUrls: ['./produto-unitario.component.scss']
})
export class ProdutoUnitarioComponent implements OnInit {

  public produtoId: number;
  public categoriaNome: string;
  public Produto: IProduto;
  public link: string;
  public Quantidade: number;
  public IdEstoque: number;
  public IdEncomenda: number;

  constructor(private activetedRoute: ActivatedRoute,
              private snackbar: SnackbarComponent,
              private produtoService: ProdutoService,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
    this.Quantidade = 1;
    this.ReceberValorRota();
    this.ReceberProduto();
  }

  ReceberValorRota(): void {
    this.produtoId = this.activetedRoute.snapshot.params.produtoId;
    this.categoriaNome = this.activetedRoute.snapshot.params.categoriaName;
  }

  ReceberProduto(): void {
    this.produtoService.GetById(this.produtoId).subscribe((produto: IProduto) => {
      this.Produto = produto;
    },
    (erro) => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  ReceberQuantidade(value: number): void {
    this.Quantidade = value;
  }
}
