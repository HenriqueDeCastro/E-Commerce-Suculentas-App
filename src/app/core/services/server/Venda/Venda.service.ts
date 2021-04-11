import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVenda } from 'src/app/shared/models/IVenda';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private UrlBase = `${environment.UrlApi}/venda`;

  constructor(private http: HttpClient) { }

  GetAll(): Observable<IVenda[]> {
    return this.http.get<IVenda[]>(`${this.UrlBase}`);
  }

  GetById(tipocategoriaId: number): Observable<IVenda> {
    return this.http.get<IVenda>(`${this.UrlBase}/${tipocategoriaId}`);
  }

  GetByUserId(userId: number, statusId: number): Observable<IVenda> {
    return this.http.get<IVenda>(`${this.UrlBase}/getByUser/${userId}/${statusId}`);
  }

  GetByStatusId(statusId: number): Observable<IVenda> {
    return this.http.get<IVenda>(`${this.UrlBase}/getByStatus/${statusId}`);
  }

  Post(venda: IVenda): Observable<IVenda>   {
    return this.http.post<IVenda>(`${this.UrlBase}`, venda);
  }

  Put(venda: IVenda): Observable<IVenda>   {
    return this.http.put<IVenda>(`${this.UrlBase}/${venda.id}`, venda);
  }

  Delete(vendaId: number): Observable<IVenda>  {
    return this.http.delete<IVenda>(`${this.UrlBase}/${vendaId}`);
  }

}
