import { TestBed } from '@angular/core/testing';

import { CompanyProductEditProductResolver } from './company-product-edit-product.resolver';

describe('CompanyProductEditProductResolver', () => {
  let resolver: CompanyProductEditProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductEditProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
