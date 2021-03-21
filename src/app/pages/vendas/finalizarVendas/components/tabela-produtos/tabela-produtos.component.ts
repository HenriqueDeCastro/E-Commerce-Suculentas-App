import { Component, Input, OnInit } from '@angular/core';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { ITabelaProdutoVenda } from 'src/app/shared/models/ITabelaProdutoVenda';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss']
})
export class TabelaProdutosComponent implements OnInit {

  @Input() Produtos: IProdutoCarrinho[]
  @Input() ValorFrete: number;
  public Carregando: boolean = false;
  public DataSource: ITabelaProdutoVenda[] = [];
  public displayedColumns = ['Item', 'Valor'];

  constructor() { }

  ngOnInit() {
    this.FazerDataSource();
  }

  FazerDataSource() {
    if(this.Produtos && this.ValorFrete) {
      this.Produtos.forEach((produto: IProdutoCarrinho) => {
        const auxDataSource: ITabelaProdutoVenda = {
          item: `${produto.quantidadePedido}un - ${produto.nome}`,
          valor: produto.preco * produto.quantidadePedido
        }

        this.DataSource.push(auxDataSource);
      })

      const auxDataSource: ITabelaProdutoVenda = {
        item: 'Frete',
        valor: Number(this.ValorFrete)
      }
      this.DataSource.push(auxDataSource);

      this.Carregando = true;
    }
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.DataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }
}
