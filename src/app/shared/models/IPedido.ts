import { IProduto } from './IProduto';

export interface IPedido {

  id?: number;
  quantidade: number;
  produtoId: number;
  vendaId?: number;
  preco: number;
  produto?: IProduto
}
