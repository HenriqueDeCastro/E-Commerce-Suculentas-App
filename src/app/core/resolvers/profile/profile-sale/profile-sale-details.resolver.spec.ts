import { TestBed } from '@angular/core/testing';

import { ProfileSaleDetailsResolver } from './profile-sale-details.resolver';

describe('ProfileSaleDetailsResolver', () => {
  let resolver: ProfileSaleDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileSaleDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
