import { IPedido } from './IPedido';

export interface IProduto {

  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  estoque: number;
  ativo: boolean;
  categoriaId: number;
  pedidos?: IPedido[];
}
