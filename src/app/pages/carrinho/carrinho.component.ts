 import { Component, OnInit } from '@angular/core';
import { CryptService } from 'src/app/core/services/shared/Crypt/Crypt.service';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public ProdutosEncomenda: IProdutoCarrinho[];
  public ProdutosEstoque: IProdutoCarrinho[];
  public Indisponivel: boolean;
  public TipoEncomenda: number;
  public TipoEstoque: number;
  public link: string;

  constructor(private cryptService: CryptService) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.TipoEncomenda = environment.TipoProdutoEncomenda;
    this.TipoEstoque = environment.TipoProdutoEstoque;
    this.ReceberProdutoCarrinho();
  }

  ReceberProdutoCarrinho(): void {
    const produtosCrypt = localStorage.getItem(environment.VariavelProduto);
    if(produtosCrypt) {
      let Produtos: IProdutoCarrinho[] = this.cryptService.descryptObject(produtosCrypt);
      this.SepararTiposProdutos(Produtos);
      this.VerificaProdutosIndisponiveis(Produtos);
    } else {
      this.ProdutosEncomenda = null;
      this.ProdutosEstoque = null;
    }
  }

  ReceberAtt(event: boolean): void {
    if (event) {
      const produtosCrypt = localStorage.getItem(environment.VariavelProduto);

      if(produtosCrypt) {
        let Produtos: IProdutoCarrinho[] = this.cryptService.descryptObject(produtosCrypt);
        this.SepararTiposProdutos(Produtos);
        this.VerificaProdutosIndisponiveis(Produtos);
      } else {
        this.ProdutosEncomenda = null;
        this.ProdutosEstoque = null;
      }
    }
  }

  SepararTiposProdutos(Produtos: IProdutoCarrinho[]) {
    this.ProdutosEncomenda = Produtos.filter(p => p.tipoProdutoId == this.TipoEncomenda);
    this.ProdutosEstoque = Produtos.filter(p => p.tipoProdutoId == this.TipoEstoque);
  }

  VerificaProdutosIndisponiveis(Produtos: IProdutoCarrinho[]) {
    const produtosIndisponiveis = Produtos.filter(p => p.indisponivel == true);

    if(produtosIndisponiveis.length > 0) {
      this.Indisponivel = true;
    } else {
      this.Indisponivel = false;
    }
  }
}
