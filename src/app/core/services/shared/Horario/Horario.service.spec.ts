/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HorarioService } from './Horario.service';

describe('Service: Horario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorarioService]
    });
  });

  it('should ...', inject([HorarioService], (service: HorarioService) => {
    expect(service).toBeTruthy();
  }));
});
