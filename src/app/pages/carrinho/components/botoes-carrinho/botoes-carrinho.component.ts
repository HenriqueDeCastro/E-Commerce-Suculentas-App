import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-botoes-carrinho',
  templateUrl: './botoes-carrinho.component.html',
  styleUrls: ['./botoes-carrinho.component.scss']
})
export class BotoesCarrinhoComponent implements OnInit {

  @Input() Tipo: number;
  public TipoEncomenda: number;
  public TipoEstoque: number;
  @Output() esvaziado = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.TipoEncomenda = environment.TipoProdutoEncomenda;
    this.TipoEstoque = environment.TipoProdutoEstoque;
  }

  LimparCarrinho(): void {
    this.RetiraProdutosPorTipo();
    this.router.navigate(['/carrinho']);
  }

  RetiraProdutosPorTipo() {
    let Produtos: IProdutoCarrinho[] = JSON.parse(localStorage.getItem(environment.VariavelProduto));
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

    localStorage.setItem(environment.VariavelQuantidade, String(QuantidadeQueContinua));
    localStorage.setItem(environment.VariavelProduto, JSON.stringify(ProdutosQueContinuam));

    this.esvaziado.emit(true);
  }
}
