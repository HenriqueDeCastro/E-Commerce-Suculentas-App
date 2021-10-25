import { TestBed } from '@angular/core/testing';

import { CartSeparateProductsInventoryResolver } from './cart-separate-products-inventory.resolver';

describe('CartSeparateProductsInventoryResolver', () => {
  let resolver: CartSeparateProductsInventoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CartSeparateProductsInventoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
