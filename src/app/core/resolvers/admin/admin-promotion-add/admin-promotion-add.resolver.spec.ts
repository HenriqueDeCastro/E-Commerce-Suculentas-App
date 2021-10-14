import { TestBed } from '@angular/core/testing';

import { AdminPromotionAddResolver } from './admin-promotion-add.resolver';

describe('AdminPromotionAddResolver', () => {
  let resolver: AdminPromotionAddResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminPromotionAddResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
