export interface ICalculateShipping {
  company: {
    id: number,
    name: string,
    picture: string
  };
  error?: string;
  custom_price: string;
  discount: string;
  id: number;
  name: string;
  price: string;
}
