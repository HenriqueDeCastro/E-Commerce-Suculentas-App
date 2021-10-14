import { TestBed } from '@angular/core/testing';

import { CompanyProductHomeProductCategorysResolver } from './company-product-home-product-categorys.resolver';

describe('CompanyProductHomeProductCategorysResolver', () => {
  let resolver: CompanyProductHomeProductCategorysResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductHomeProductCategorysResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
