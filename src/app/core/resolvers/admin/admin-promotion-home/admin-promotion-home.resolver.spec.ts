import { TestBed } from '@angular/core/testing';

import { AdminPromotionHomeResolver } from './admin-promotion-home.resolver';

describe('AdminPromotionHomeResolver', () => {
  let resolver: AdminPromotionHomeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminPromotionHomeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
