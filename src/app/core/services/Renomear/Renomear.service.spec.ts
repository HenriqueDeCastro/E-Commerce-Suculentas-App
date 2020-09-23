/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RenomearService } from './Renomear.service';

describe('Service: Renomear', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenomearService]
    });
  });

  it('should ...', inject([RenomearService], (service: RenomearService) => {
    expect(service).toBeTruthy();
  }));
});
