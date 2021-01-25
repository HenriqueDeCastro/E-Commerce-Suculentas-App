import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private UrlBase = `${environment.UrlApi}/endereco`;

  constructor(private http: HttpClient) { }

  GetById(enderecoId: number): Observable<IEndereco> {
    return this.http.get<IEndereco>(`${this.UrlBase}/${enderecoId}`);
  }

  GetByUserId(userId: number): Observable<IEndereco[]> {
    return this.http.get<IEndereco[]>(`${this.UrlBase}/getByUserId/${userId}`);
  }

  Post(endereco: IEndereco): Observable<IEndereco>   {
    return this.http.post<IEndereco>(`${this.UrlBase}`, endereco) ;
  }

  Put(endereco: IEndereco): Observable<IEndereco>   {
    return this.http.put<IEndereco>(`${this.UrlBase}/${endereco.id}`, endereco);
  }

  Delete(enderecoId: number): Observable<IEndereco>  {
    return this.http.delete<IEndereco>(`${this.UrlBase}/${enderecoId}`);
  }

}
