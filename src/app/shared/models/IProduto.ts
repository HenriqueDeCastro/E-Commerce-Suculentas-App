import { IPedido } from './IPedido';

export interface IProduto {

  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  estoque?: number;
  quantidadeMaxima?: number;
  ativo: boolean;
  tipoProdutoId?: number;
  categoriaId: number;
  pedidos?: IPedido[];
}
