import { TestBed } from '@angular/core/testing';

import { CartSeparateProductsOrderResolver } from './cart-separate-products-order.resolver';

describe('CartSeparateProductsOrderResolver', () => {
  let resolver: CartSeparateProductsOrderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CartSeparateProductsOrderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
