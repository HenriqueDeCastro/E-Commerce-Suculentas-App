import { TestBed } from '@angular/core/testing';

import { VerifyProductTypeService } from './verify-product-type.service';

describe('VerifyProductTypeService', () => {
  let service: VerifyProductTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyProductTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
