import { IProduct } from 'src/app/shared/models/iproduct';

export interface IOrder {
  id?: number;
  amount: number;
  productId: number;
  saleId?: number;
  price: number;
  product?: IProduct;
}
