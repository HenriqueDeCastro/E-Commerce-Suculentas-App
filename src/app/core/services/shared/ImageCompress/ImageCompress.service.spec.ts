/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImageCompressService } from './ImageCompress.service';

describe('Service: ImageCompress', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageCompressService]
    });
  });

  it('should ...', inject([ImageCompressService], (service: ImageCompressService) => {
    expect(service).toBeTruthy();
  }));
});
