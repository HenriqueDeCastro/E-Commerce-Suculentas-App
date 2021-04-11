import { IPedido } from './IPedido';

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
  enderecoId: number;
  pedidos?: IPedido[];
}
