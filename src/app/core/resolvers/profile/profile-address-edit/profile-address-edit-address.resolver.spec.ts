import { TestBed } from '@angular/core/testing';

import { ProfileAddressEditAddressResolver } from './profile-address-edit-address.resolver';

describe('ProfileAddressEditAddressResolver', () => {
  let resolver: ProfileAddressEditAddressResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileAddressEditAddressResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
