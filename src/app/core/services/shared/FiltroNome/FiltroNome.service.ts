import { Injectable } from '@angular/core';
import { IProduto } from 'src/app/shared/models/IProduto';

@Injectable({
  providedIn: 'root'
})
export class FiltroNomeService {

constructor() { }

transform(produtos: IProduto[], descriptionQuery: string): IProduto[] {

  descriptionQuery = descriptionQuery
    .trim()
    .toLowerCase();

  if (descriptionQuery) {
    return produtos.filter(produto =>
      produto.nome.toLowerCase().includes(descriptionQuery));
  } else {
    return produtos;
  }
}

}
