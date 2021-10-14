import { TestBed } from '@angular/core/testing';

import { ComparePasswordsService } from './compare-passwords.service';

describe('ComparePasswordsService', () => {
  let service: ComparePasswordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparePasswordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
