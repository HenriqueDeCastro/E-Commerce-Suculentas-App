/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResetScrollService } from './ResetScroll.service';

describe('Service: ResetScroll', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetScrollService]
    });
  });

  it('should ...', inject([ResetScrollService], (service: ResetScrollService) => {
    expect(service).toBeTruthy();
  }));
});
