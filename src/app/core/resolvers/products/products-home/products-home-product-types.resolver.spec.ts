import { TestBed } from '@angular/core/testing';

import { ProductsHomeProductTypesResolver } from './products-home-product-types.resolver';

describe('ProductsHomeProductTypesResolver', () => {
  let resolver: ProductsHomeProductTypesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsHomeProductTypesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
