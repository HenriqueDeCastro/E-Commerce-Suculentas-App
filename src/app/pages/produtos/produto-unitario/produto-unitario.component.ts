import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/core/services/Produto/Produto.service';
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
  public quantidade: number;

  constructor(private activetedRoute: ActivatedRoute,
              private snackbar: SnackbarComponent,
              private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.quantidade = 1;
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
      this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
    });
  }
}
