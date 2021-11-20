import { ISalePagination } from './../../../shared/models/isale-pagination';
import { ISale } from './../../../shared/models/isale';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISaleCount } from 'src/app/shared/models/isale-count';

const API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private urlEndPointApi = `${API}/sale`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ISale[]> {
    return this.http.get<ISale[]>(`${this.urlEndPointApi}`);
  }

  getById(id: number): Observable<ISale> {
    return this.http.get<ISale>(`${this.urlEndPointApi}/${id}`);
  }

  getByIdCompany(id: number): Observable<ISale> {
    return this.http.get<ISale>(`${this.urlEndPointApi}/getByIdCompany/${id}`);
  }

  getStatusByUser(userId: number, statusId: number, currentPage: number): Observable<ISalePagination> {
    return this.http.get<ISalePagination>(`${this.urlEndPointApi}/getStatusByUser?userId=${userId}&statusId=${statusId}&currentPage=${currentPage}`);
  }

  getByStatus(statusId: number, currentPage: number): Observable<ISalePagination> {
    return this.http.get<ISalePagination>(`${this.urlEndPointApi}/getByStatus?statusId=${statusId}&currentPage=${currentPage}`);
  }

  getByStatusCountCompany(): Observable<ISaleCount[]> {
    return this.http.get<ISaleCount[]>(`${this.urlEndPointApi}/getByStatusCountCompany`);
  }

  getByStatusCountUser(userId: number): Observable<ISaleCount[]> {
    return this.http.get<ISaleCount[]>(`${this.urlEndPointApi}/getByStatusCountUser/${userId}`);
  }

  post(sale: ISale): Observable<ISale>   {
    return this.http.post<ISale>(`${this.urlEndPointApi}`, sale);
  }

  put(sale: ISale): Observable<ISale>   {
    return this.http.put<ISale>(`${this.urlEndPointApi}/${sale.id}`, sale);
  }

  delete(saleId: number): Observable<ISale>  {
    return this.http.delete<ISale>(`${this.urlEndPointApi}/${saleId}`);
  }

}
