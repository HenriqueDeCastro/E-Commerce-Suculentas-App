import { ICategoria } from './ICategoria';

export interface ITipoCategoria {

  id?: number;
  nome: string;
  categorias?: ICategoria[];
}
