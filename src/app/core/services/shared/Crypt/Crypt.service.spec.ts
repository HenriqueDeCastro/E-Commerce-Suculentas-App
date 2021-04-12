/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { CryptService } from './Crypt.service';

describe('Service: Crypt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptService]
    });
  });

  it('should ...', inject([CryptService], (service: CryptService) => {
    expect(service).toBeTruthy();
  }));
});
