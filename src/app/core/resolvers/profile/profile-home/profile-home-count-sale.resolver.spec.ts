import { TestBed } from '@angular/core/testing';

import { ProfileHomeCountSaleResolver } from './profile-home-count-sale.resolver';

describe('ProfileHomeCountSaleResolver', () => {
  let resolver: ProfileHomeCountSaleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProfileHomeCountSaleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
