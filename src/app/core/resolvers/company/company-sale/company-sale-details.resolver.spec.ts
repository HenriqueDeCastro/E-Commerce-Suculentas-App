import { TestBed } from '@angular/core/testing';

import { CompanySaleDetailsResolver } from './company-sale-details.resolver';

describe('CompanySaleDetailsResolver', () => {
  let resolver: CompanySaleDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CompanySaleDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
