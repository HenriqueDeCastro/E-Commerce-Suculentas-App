export interface IProdutoCarrinho {

  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  estoque: number;
  ativo: boolean;
  categoriaId: number;
  quantidadePedido: number;
}
