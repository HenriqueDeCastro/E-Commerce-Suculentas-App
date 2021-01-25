/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoProdutoService } from './TipoProduto.service';

describe('Service: TipoProduto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoProdutoService]
    });
  });

  it('should ...', inject([TipoProdutoService], (service: TipoProdutoService) => {
    expect(service).toBeTruthy();
  }));
});
