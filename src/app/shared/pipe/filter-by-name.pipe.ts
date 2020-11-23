import { Pipe, PipeTransform } from '@angular/core';

import { IProduto } from '../models/IProduto';

@Pipe({ name: 'filterByName'})
export class FilterByName implements PipeTransform {

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
