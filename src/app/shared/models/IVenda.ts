import { IPedido } from './IPedido';
import { IUser } from './IUser';

export interface IVenda {

  id?: number;
  dataVenda: string;
  codigoTransacao?: string;
  statusPagSeguro?: string;
  valor: number;
  frete: boolean;
  valorFrete?: number;
  codigoRastreio?: string;
  statusId?: number;
  userId: number;
  endereco: string;
  user?: IUser;
  pedidos?: IPedido[];
}
