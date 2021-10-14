import { TestBed } from '@angular/core/testing';

import { ProductsHomeCategorysResolver } from './products-home-categorys.resolver';

describe('ProductsHomeCategorysResolver', () => {
  let resolver: ProductsHomeCategorysResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsHomeCategorysResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
