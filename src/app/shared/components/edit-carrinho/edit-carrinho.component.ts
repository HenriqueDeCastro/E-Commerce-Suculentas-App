import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProdutoCarrinho } from '../../models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';
import { CryptService } from 'src/app/core/services/shared/Crypt/Crypt.service';

@Component({
  selector: 'app-edit-carrinho',
  templateUrl: './edit-carrinho.component.html',
  styleUrls: ['./edit-carrinho.component.scss']
})
export class EditCarrinhoComponent implements OnInit {

  @Input() Produto: IProdutoCarrinho;
  @Output() Acao = new EventEmitter<string>();
  public Quantidade: number;
  public QuantidadeMaxima: number;

  constructor(private cryptService: CryptService) { }

  ngOnInit(): void {
    this.Quantidade = this.Produto.quantidadePedido;
    this.QuantidadeMaximaProdutoDisponivel(this.Produto);
  }

  ReceberQuantidade(value: number): void {
    this.Quantidade = value;
  }

  RemoverItem(): void {
    const ProdutosCrypt = localStorage.getItem(environment.VariavelProduto);
    const Produtos = this.cryptService.descryptObject(ProdutosCrypt);
    Produtos.forEach((produto, index) => {
      if (produto.id === this.Produto.id) {
        Produtos.splice(index, 1);
      }
    });

    const QuantidadeCrypt = localStorage.getItem(environment.VariavelQuantidade);
    let QuantidadeStorage = Number(this.cryptService.descryptText(QuantidadeCrypt));
    QuantidadeStorage = QuantidadeStorage - this.Produto.quantidadePedido;

    if(Produtos.length > 0 && QuantidadeStorage > 0) {
      localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject(Produtos));
      localStorage.setItem(environment.VariavelQuantidade, this.cryptService.cryptText(String(QuantidadeStorage)));
    } else {
      localStorage.removeItem(environment.VariavelProduto);
      localStorage.removeItem(environment.VariavelQuantidade);
    }

    this.Acao.emit('Removido');
  }

  EditItem(): void {
    const ProdutosCrypt = localStorage.getItem(environment.VariavelProduto);
    const Produtos = this.cryptService.descryptObject(ProdutosCrypt);

    let QuantidadeCarrinho = 0;

    Produtos.forEach((produto) => {
      if (produto.id === this.Produto.id) {
        produto.quantidadePedido = this.Quantidade;
      }
      QuantidadeCarrinho = QuantidadeCarrinho + produto.quantidadePedido;
    });

    localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject(Produtos));
    localStorage.setItem(environment.VariavelQuantidade, this.cryptService.cryptText(String(QuantidadeCarrinho)));

    this.Acao.emit('Editado');
  }

  QuantidadeMaximaProdutoDisponivel(produto: IProdutoCarrinho) {
    if (produto.tipoProdutoId == environment.TipoProdutoEncomenda)
    {
      this.QuantidadeMaxima = produto.quantidadeMaxima;
    }
    else
    {
      this.QuantidadeMaxima = produto.estoque;
    }
  }

}
