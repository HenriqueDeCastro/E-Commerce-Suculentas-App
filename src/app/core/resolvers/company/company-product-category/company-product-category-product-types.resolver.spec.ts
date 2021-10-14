import { TestBed } from '@angular/core/testing';

import { CompanyProductCategoryProductTypesResolver } from './company-product-category-product-types.resolver';

describe('CompanyProductCategoryProductTypesResolver', () => {
  let resolver: CompanyProductCategoryProductTypesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductCategoryProductTypesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
