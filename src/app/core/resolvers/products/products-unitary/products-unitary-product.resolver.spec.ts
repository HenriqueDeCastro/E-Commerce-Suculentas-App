import { TestBed } from '@angular/core/testing';

import { ProductsUnitaryProductResolver } from './products-unitary-product.resolver';

describe('ProductsUnitaryProductResolver', () => {
  let resolver: ProductsUnitaryProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsUnitaryProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
