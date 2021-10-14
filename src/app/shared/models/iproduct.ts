import { IOrder } from "./iorder";

export interface IProduct {

  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inventory?: number;
  maximumQuantity?: number;
  productTypeId: number;
  categoryId: number;
  active: boolean;
  orders?: IOrder[];
}
