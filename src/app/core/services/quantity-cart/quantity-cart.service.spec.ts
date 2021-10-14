import { TestBed } from '@angular/core/testing';

import { QuantityCartService } from './quantity-cart.service';

describe('QuantityCartService', () => {
  let service: QuantityCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantityCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
