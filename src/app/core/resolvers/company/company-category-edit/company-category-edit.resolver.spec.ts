import { TestBed } from '@angular/core/testing';

import { CompanyCategoryEditResolver } from './company-category-edit.resolver';

describe('CompanyCategoryEditResolver', () => {
  let resolver: CompanyCategoryEditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanyCategoryEditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
