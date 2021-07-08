import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVendasCount } from 'src/app/shared/models/IVendasCount';
import { IVenda } from 'src/app/shared/models/IVenda';
import { IVendasPagination } from 'src/app/shared/models/IVendasPagination';
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

  GetById(vendaId: number): Observable<IVenda> {
    return this.http.get<IVenda>(`${this.UrlBase}/${vendaId}`);
  }

  GetByIdEmpresa(vendaId: number): Observable<IVenda> {
    return this.http.get<IVenda>(`${this.UrlBase}/getByIdEmpresa/${vendaId}`);
  }

  GetByUserId(userId: number, statusId: number, pageAtual: number): Observable<IVendasPagination> {
    return this.http.get<IVendasPagination>(`${this.UrlBase}/getStatusByUser?UserId=${userId}&statusId=${statusId}&pageAtual=${pageAtual}`);
  }

  GetByStatusId(statusId: number, pageAtual: number): Observable<IVendasPagination> {
    return this.http.get<IVendasPagination>(`${this.UrlBase}/getByStatus?statusId=${statusId}&pageAtual=${pageAtual}`);
  }

  GetByStatusCountEmpresa(): Observable<IVendasCount[]> {
    return this.http.get<IVendasCount[]>(`${this.UrlBase}/getByStatusCountEmpresa`);
  }

  GetByStatusCountUser(userId: number): Observable<IVendasCount[]> {
    return this.http.get<IVendasCount[]>(`${this.UrlBase}/getByStatusCountUser/${userId}`);
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

  Notification() {
    let params = new HttpParams();
    params = params.set('notificationCode', 'aaaaaaaa');
    params = params.set('notificationType', 'aaaaaaaaa');
    return this.http.post<IVenda>(`http://www.xn--suculentasdar-1lb.com.br/venda/notificationPagSeguro`, params);
  }
}
