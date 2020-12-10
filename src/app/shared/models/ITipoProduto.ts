import { IProduto } from './IProduto';

export interface ITipoProduto {

  id?: number;
  nome: string;
  produtos?: IProduto[];
}
