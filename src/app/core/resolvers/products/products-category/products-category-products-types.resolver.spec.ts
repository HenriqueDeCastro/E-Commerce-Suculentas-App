import { TestBed } from '@angular/core/testing';

import { ProductsCategoryProductsTypesResolver } from './products-category-products-types.resolver';

describe('ProductsCategoryProductsTypesResolver', () => {
  let resolver: ProductsCategoryProductsTypesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsCategoryProductsTypesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
