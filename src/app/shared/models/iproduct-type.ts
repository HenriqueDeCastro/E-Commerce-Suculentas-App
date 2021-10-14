import { IProduct } from './iproduct';
export interface IProductType {
  id?: number;
  name: string;
  products?: IProduct[];
}
