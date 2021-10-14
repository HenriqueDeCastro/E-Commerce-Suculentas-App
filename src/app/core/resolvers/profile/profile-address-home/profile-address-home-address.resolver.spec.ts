import { TestBed } from '@angular/core/testing';

import { ProfileAddressHomeAddressResolver } from './profile-address-home-address.resolver';

describe('ProfileAddressHomeAddressResolver', () => {
  let resolver: ProfileAddressHomeAddressResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileAddressHomeAddressResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
