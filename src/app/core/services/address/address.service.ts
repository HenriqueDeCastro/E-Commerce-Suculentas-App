import { IAddress } from './../../../shared/models/iaddress';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private urlEndPointApi = `${API}/address`;

  constructor(
    private http: HttpClient
  ) { }

  getById(id: number): Observable<IAddress> {
    return this.http.get<IAddress>(`${this.urlEndPointApi}/${id}`);
  }

  getByUserId(userId: number): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(`${this.urlEndPointApi}/getByUserId/${userId}`);
  }

  post(address: IAddress): Observable<IAddress>   {
    return this.http.post<IAddress>(`${this.urlEndPointApi}`, address) ;
  }

  put(address: IAddress): Observable<IAddress>   {
    return this.http.put<IAddress>(`${this.urlEndPointApi}/${address.id}`, address);
  }

  delete(id: number): Observable<IAddress>  {
    return this.http.delete<IAddress>(`${this.urlEndPointApi}/${id}`);
  }
}
