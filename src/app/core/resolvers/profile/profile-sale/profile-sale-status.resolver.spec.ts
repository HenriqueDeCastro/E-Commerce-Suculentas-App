import { TestBed } from '@angular/core/testing';

import { ProfileSaleStatusResolver } from './profile-sale-status.resolver';

describe('ProfileSaleStatusResolver', () => {
  let resolver: ProfileSaleStatusResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileSaleStatusResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
