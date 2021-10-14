import { TestBed } from '@angular/core/testing';

import { CompanyProductEditCategorysResolver } from './company-product-edit-categorys.resolver';

describe('CompanyProductEditCategorysResolver', () => {
  let resolver: CompanyProductEditCategorysResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductEditCategorysResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
