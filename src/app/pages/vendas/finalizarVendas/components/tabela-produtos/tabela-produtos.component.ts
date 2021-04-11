import { Component, Input, OnInit } from '@angular/core';
import { IEndereco } from 'src/app/shared/models/IEndereco';
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
  @Input() Endereco: IEndereco;
  public Carregando: boolean = false;
  public DataSource: ITabelaProdutoVenda[] = [];
  public displayedColumns = ['Item', 'Valor'];
  public ValorTotal: number = 0;

  constructor() { }

  ngOnInit() {
    this.FazerDataSource();
    this.getTotal();
  }

  FazerDataSource() {
    if(this.Produtos) {
      this.Produtos.forEach((produto: IProdutoCarrinho) => {
        const auxDataSource: ITabelaProdutoVenda = {
          item: `${produto.quantidadePedido}un. de ${produto.nome}`,
          valor: produto.preco * produto.quantidadePedido
        }

        this.DataSource.push(auxDataSource);
      })
    }

    if(this.ValorFrete) {
      const auxDataSource: ITabelaProdutoVenda = {
        item: 'Frete',
        valor: Number(this.ValorFrete)
      }
      this.DataSource.push(auxDataSource);
    }

    this.Carregando = true;
  }

  getTotal() {
    this.ValorTotal = this.DataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0);
    return this.ValorTotal;
  }
}
