import { TestBed } from '@angular/core/testing';

import { CompanyProductEditProductTypesResolver } from './company-product-edit-product-types.resolver';

describe('CompanyProductEditProductTypesResolver', () => {
  let resolver: CompanyProductEditProductTypesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductEditProductTypesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
