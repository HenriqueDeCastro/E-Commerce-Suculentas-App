import { TestBed } from '@angular/core/testing';

import { ProductsUnitaryProductsTypeResolver } from './products-unitary-products-type.resolver';

describe('ProductsUnitaryProductsTypeResolver', () => {
  let resolver: ProductsUnitaryProductsTypeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsUnitaryProductsTypeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
