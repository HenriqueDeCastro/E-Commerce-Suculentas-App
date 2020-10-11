/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoCategoriaService } from './TipoCategoria.service';

describe('Service: TipoCategoria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoCategoriaService]
    });
  });

  it('should ...', inject([TipoCategoriaService], (service: TipoCategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
