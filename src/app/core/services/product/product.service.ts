import { IProduct } from './../../../shared/models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlEndPointApi = `${API}/product`;

  constructor(
    private http: HttpClient
  ) { }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.urlEndPointApi}/${id}`);
  }

  getByCategoryId(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.urlEndPointApi}/getByCategory/${id}`);
  }

  post(product: IProduct): Observable<IProduct>   {
    return this.http.post<IProduct>(`${this.urlEndPointApi}`, product);
  }

  postUpload(file: File, mini: boolean) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('mini', String(mini));

    return this.http.post(`${this.urlEndPointApi}/upload`, formData);
  }

  put(product: IProduct): Observable<IProduct>   {
    return this.http.put<IProduct>(`${this.urlEndPointApi}/${product.id}`, product);
  }

  delete(id: number): Observable<IProduct>  {
    return this.http.delete<IProduct>(`${this.urlEndPointApi}/${id}`);
  }
}
