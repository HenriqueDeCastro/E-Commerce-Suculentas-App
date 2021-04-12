/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ProgressBarService } from './ProgressBar.service';

describe('Service: ProgressBar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressBarService]
    });
  });

  it('should ...', inject([ProgressBarService], (service: ProgressBarService) => {
    expect(service).toBeTruthy();
  }));
});
