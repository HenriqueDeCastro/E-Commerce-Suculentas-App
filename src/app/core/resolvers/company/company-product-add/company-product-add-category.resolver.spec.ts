import { TestBed } from '@angular/core/testing';

import { CompanyProductAddCategoryResolver } from './company-product-add-category.resolver';

describe('CompanyProductAddCategoryResolver', () => {
  let resolver: CompanyProductAddCategoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyProductAddCategoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
