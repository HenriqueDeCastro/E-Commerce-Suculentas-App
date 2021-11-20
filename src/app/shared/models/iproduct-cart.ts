export interface IProductCart {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inventory?: number;
  maximumQuantity?: number;
  active: boolean;
  productTypeId: number;
  productTypeName: string;
  categoryId: number;
  quantityOrder: number;
  unavailable?: boolean;
}
