import { TestBed } from '@angular/core/testing';

import { CompanySaleStatusResolver } from './company-sale-status.resolver';

describe('CompanySaleStatusResolver', () => {
  let resolver: CompanySaleStatusResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanySaleStatusResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
