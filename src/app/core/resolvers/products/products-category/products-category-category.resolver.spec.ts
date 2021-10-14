import { TestBed } from '@angular/core/testing';

import { ProductsCategoryCategoryResolver } from './products-category-category.resolver';

describe('ProductsCategoryCategoryResolver', () => {
  let resolver: ProductsCategoryCategoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsCategoryCategoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
