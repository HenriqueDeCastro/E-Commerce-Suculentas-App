import { IProduct } from './iproduct';
export interface ICategory {

  id?: number;
  name: string;
  description: string;
  active: boolean;
  products?: IProduct[];
}
