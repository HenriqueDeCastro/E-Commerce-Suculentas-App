import { ICategoria } from './ICategoria'
import { IProduto } from './IProduto';

export interface ICategoriaPagination {

  categoria: ICategoria;
  produtos: IProduto[];
  ultimaPagina: boolean;
}
