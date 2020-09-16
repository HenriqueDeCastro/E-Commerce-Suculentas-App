import { IProduto } from './IProduto';

export interface ICategoria {

  id?: number;
  nome: string;
  descricao: string;
  ativo: boolean;
  produtos?: IProduto[];
}
