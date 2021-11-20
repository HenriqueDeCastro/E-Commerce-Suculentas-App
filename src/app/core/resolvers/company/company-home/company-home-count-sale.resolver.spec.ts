import { TestBed } from '@angular/core/testing';

import { CompanyHomeCountSaleResolver } from './company-home-count-sale.resolver';

describe('CompanyHomeCountSaleResolver', () => {
  let resolver: CompanyHomeCountSaleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyHomeCountSaleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
