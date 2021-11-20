import { TestBed } from '@angular/core/testing';

import { FinalizeSaleProductResolver } from './finalize-sale-product.resolver';

describe('FinalizeSaleProductResolver', () => {
  let resolver: FinalizeSaleProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FinalizeSaleProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
