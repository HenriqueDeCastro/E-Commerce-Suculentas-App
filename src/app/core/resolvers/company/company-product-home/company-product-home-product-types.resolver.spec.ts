import { TestBed } from '@angular/core/testing';

import { CompanyProductHomeProductTypesResolver } from './company-product-home-product-types.resolver';

describe('CompanyProductHomeProductTypesResolver', () => {
  let resolver: CompanyProductHomeProductTypesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductHomeProductTypesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
