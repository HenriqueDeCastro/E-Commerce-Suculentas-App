import { TestBed } from '@angular/core/testing';

import { CompanyProductCategoryCategoryResolver } from './company-product-category-category.resolver';

describe('CompanyProductCategoryCategoryResolver', () => {
  let resolver: CompanyProductCategoryCategoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductCategoryCategoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
