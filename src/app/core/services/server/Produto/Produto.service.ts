import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from 'src/app/shared/models/IProduto';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private UrlBase = `${environment.UrlApi}/produto`;

  constructor(private http: HttpClient) { }

  GetById(produtoId: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.UrlBase}/${produtoId}`);
  }

  GetByCategoriaId(categoriaId: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.UrlBase}/getByCategoria/${categoriaId}`);
  }

  Post(produto: IProduto): Observable<IProduto>   {
    return this.http.post<IProduto>(`${this.UrlBase}`, produto);
  }

  postUpload(file: File, mini: boolean) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('mini', String(mini));

    return this.http.post(`${this.UrlBase}/upload`, formData);
  }

  Put(produto: IProduto): Observable<IProduto>   {
    return this.http.put<IProduto>(`${this.UrlBase}/${produto.id}`, produto);
  }

  Delete(produtoId: number): Observable<IProduto>  {
    return this.http.delete<IProduto>(`${this.UrlBase}/${produtoId}`);
  }

}
