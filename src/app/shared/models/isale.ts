import { IOrder } from './iorder';
import { IUser } from "./iuser";

export interface ISale {
  id?: number;
  date: string;
  transactionCode?: string;
  statusPagSeguro?: string;
  price: number;
  shipping: boolean;
  shippingValue?: number;
  trackingCode?: string;
  statusId?: number;
  userId: number;
  address: string;
  user?: IUser;
  orders?: IOrder[];
}
