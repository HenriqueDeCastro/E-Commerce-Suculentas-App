import { ISale } from './isale';

export interface ISalePagination {

  sales: ISale[];
  lastPage: boolean;
}
