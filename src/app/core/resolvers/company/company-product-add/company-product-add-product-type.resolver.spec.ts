import { TestBed } from '@angular/core/testing';

import { CompanyProductAddProductTypeResolver } from './company-product-add-product-type.resolver';

describe('CompanyProductAddProductTypeResolver', () => {
  let resolver: CompanyProductAddProductTypeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductAddProductTypeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
