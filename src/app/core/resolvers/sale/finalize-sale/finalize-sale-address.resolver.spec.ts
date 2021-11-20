import { TestBed } from '@angular/core/testing';

import { FinalizeSaleAddressResolver } from './finalize-sale-address.resolver';

describe('FinalizeSaleAddressResolver', () => {
  let resolver: FinalizeSaleAddressResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FinalizeSaleAddressResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
