import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CryptService } from 'src/app/core/services/shared/Crypt/Crypt.service';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrinho-botoes',
  templateUrl: './carrinho-botoes.component.html',
  styleUrls: ['./carrinho-botoes.component.scss']
})
export class BotoesCarrinhoComponent implements OnInit {

  @Input() Tipo: number;
  public TipoEncomenda: number;
  public TipoEstoque: number;
  public IdEstoque: number;
  public IdEncomenda: number;
  @Output() esvaziado = new EventEmitter<boolean>();

  constructor(private router: Router,
              private cryptService: CryptService) { }

  ngOnInit(): void {
    this.TipoEncomenda = environment.TipoProdutoEncomenda;
    this.TipoEstoque = environment.TipoProdutoEstoque;
    this.IdEstoque = environment.TipoProdutoEstoque;
    this.IdEncomenda = environment.TipoProdutoEncomenda;
  }

  LimparCarrinho(): void {
    this.RetiraProdutosPorTipo();
    this.router.navigate(['/carrinho']);
  }

  RetiraProdutosPorTipo() {
    const ProdutosCrypt = localStorage.getItem(environment.VariavelProduto);

    if(ProdutosCrypt) {
      let Produtos: IProdutoCarrinho[] = this.cryptService.descryptObject(ProdutosCrypt);
      let ProdutosQueContinuam: IProdutoCarrinho[];
      let QuantidadeQueContinua: number = 0;

      localStorage.removeItem(environment.VariavelProduto);
      localStorage.removeItem(environment.VariavelQuantidade);

      if(this.Tipo == this.TipoEncomenda)
      {
        ProdutosQueContinuam = Produtos.filter(p => p.tipoProdutoId == this.TipoEstoque);
      }
      else
      {
        ProdutosQueContinuam = Produtos.filter(p => p.tipoProdutoId == this.TipoEncomenda);
      }

      ProdutosQueContinuam.forEach((produto: IProdutoCarrinho) => {
        QuantidadeQueContinua += produto.quantidadePedido;
      })

      if(ProdutosQueContinuam && QuantidadeQueContinua) {
        localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject(ProdutosQueContinuam));
        localStorage.setItem(environment.VariavelQuantidade, this.cryptService.cryptText(String(QuantidadeQueContinua)));
      }
    }

    this.esvaziado.emit(true);
  }

  Finalizar(id: number) {
    this.router.navigate(['/vendas/finalizar/' + id]);
  }
}
