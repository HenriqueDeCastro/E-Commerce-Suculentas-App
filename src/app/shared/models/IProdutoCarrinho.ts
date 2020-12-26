export interface IProdutoCarrinho {

  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  estoque?: number;
  quantidadeMaxima?: number;
  ativo: boolean;
  tipoProdutoId: number;
  categoriaId: number;
  quantidadePedido: number;
}
