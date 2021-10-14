import { IProductType } from './../../../shared/models/iproduct-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyProductTypeService {

  constructor() { }

  checkByName(productTypes: IProductType[], typeName: string): boolean {
    const result = productTypes.filter(p => p.name === typeName);
    return !!result.length;
  }

  checkById(productTypes: IProductType[], typeId: number): boolean {
    const result = productTypes.filter(p => p.id === typeId);
    return !!result.length;
  }

  objectByName(productTypes: IProductType[], typeName: string): IProductType {
    const result = productTypes.filter(p => p.name === typeName)[0];
    return result;
  }

  objectById(productTypes: IProductType[], typeId: number): IProductType {
    const result = productTypes.filter(p => p.id === typeId)[0];
    return result;
  }
}
