import { TestBed } from '@angular/core/testing';

import { AdminRoleResolver } from './admin-role.resolver';

describe('AdminRoleResolver', () => {
  let resolver: AdminRoleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminRoleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
