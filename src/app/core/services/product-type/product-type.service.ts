import { IProductType } from './../../../shared/models/iproduct-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private urlEndPointApi = `${API}/producttype`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<IProductType[]> {
    return this.http.get<IProductType[]>(`${this.urlEndPointApi}`);
  }

  getAllWithoutProducts(): Observable<IProductType[]> {
    return this.http.get<IProductType[]>(`${this.urlEndPointApi}/getWithoutProduct`);
  }

  getById(id: number): Observable<IProductType> {
    return this.http.get<IProductType>(`${this.urlEndPointApi}/${id}`);
  }

  post(productType: IProductType): Observable<IProductType>   {
    return this.http.post<IProductType>(`${this.urlEndPointApi}`, productType);
  }

  put(productType: IProductType): Observable<IProductType>   {
    return this.http.put<IProductType>(`${this.urlEndPointApi}/${productType.id}`, productType);
  }

  delete(id: number): Observable<IProductType>  {
    return this.http.delete<IProductType>(`${this.urlEndPointApi}/${id}`);
  }
}
