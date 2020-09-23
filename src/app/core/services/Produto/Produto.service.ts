import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from 'src/app/shared/models/IProduto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private UrlBase = 'http://localhost:5000/produto';

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

  postUpload(file: File) {
    const fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    return this.http.post(`${this.UrlBase}/upload`, formData);
  }

  Put(produto: IProduto): Observable<IProduto>   {
    return this.http.put<IProduto>(`${this.UrlBase}/${produto.id}`, produto);
  }

  Delete(produtoId: number): Observable<IProduto>  {
    return this.http.delete<IProduto>(`${this.UrlBase}/${produtoId}`);
  }

}
