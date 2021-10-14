import { TestBed } from '@angular/core/testing';

import { CompanyCategoryHomeResolver } from './company-category-home.resolver';

describe('CompanyCategoryHomeResolver', () => {
  let resolver: CompanyCategoryHomeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyCategoryHomeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
