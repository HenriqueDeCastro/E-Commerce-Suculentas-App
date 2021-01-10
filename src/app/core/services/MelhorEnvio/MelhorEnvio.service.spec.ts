/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MelhorEnvioService } from './MelhorEnvio.service';

describe('Service: MelhorEnvio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MelhorEnvioService]
    });
  });

  it('should ...', inject([MelhorEnvioService], (service: MelhorEnvioService) => {
    expect(service).toBeTruthy();
  }));
});
