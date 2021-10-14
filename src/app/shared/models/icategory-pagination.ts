import { IProduct } from './iproduct';
import { ICategory } from './icategory';

export interface ICategoryPagination {

  category: ICategory;
  products: IProduct[];
  lastPage: boolean;
}
