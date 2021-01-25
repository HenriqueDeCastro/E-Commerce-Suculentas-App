import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ITipoProduto } from '../../../../shared/models/ITipoProduto';

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService {

  private UrlBase = `${environment.UrlApi}/tipoproduto`;

  constructor(private http: HttpClient) { }

  GetAll(): Observable<ITipoProduto[]> {
    return this.http.get<ITipoProduto[]>(`${this.UrlBase}`);
  }

  GetAllSemProduto(): Observable<ITipoProduto[]> {
    return this.http.get<ITipoProduto[]>(`${this.UrlBase}/getSemProduto`);
  }

  GetById(tipocategoriaId: number): Observable<ITipoProduto> {
    return this.http.get<ITipoProduto>(`${this.UrlBase}/${tipocategoriaId}`);
  }

  Post(tipocategoria: ITipoProduto): Observable<ITipoProduto>   {
    return this.http.post<ITipoProduto>(`${this.UrlBase}`, tipocategoria);
  }

  Put(tipocategoria: ITipoProduto): Observable<ITipoProduto>   {
    return this.http.put<ITipoProduto>(`${this.UrlBase}/${tipocategoria.id}`, tipocategoria);
  }

  Delete(tipocategoriaId: number): Observable<ITipoProduto>  {
    return this.http.delete<ITipoProduto>(`${this.UrlBase}/${tipocategoriaId}`);
  }

}
