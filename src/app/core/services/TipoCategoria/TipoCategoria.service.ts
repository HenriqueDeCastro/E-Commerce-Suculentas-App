import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ITipoCategoria } from '../../../shared/models/ITipoCategoria';

@Injectable({
  providedIn: 'root'
})
export class TipoCategoriaService {

  private UrlBase = `${environment.UrlApi}/tipocategoria`;

  constructor(private http: HttpClient) { }

  GetAll(): Observable<ITipoCategoria[]> {
    return this.http.get<ITipoCategoria[]>(`${this.UrlBase}`);
  }

  GetAllSemCategoria(): Observable<ITipoCategoria[]> {
    return this.http.get<ITipoCategoria[]>(`${this.UrlBase}/getSemCategoria`);
  }

  GetById(tipocategoriaId: number): Observable<ITipoCategoria> {
    return this.http.get<ITipoCategoria>(`${this.UrlBase}/${tipocategoriaId}`);
  }

  Post(tipocategoria: ITipoCategoria): Observable<ITipoCategoria>   {
    return this.http.post<ITipoCategoria>(`${this.UrlBase}`, tipocategoria);
  }

  Put(tipocategoria: ITipoCategoria): Observable<ITipoCategoria>   {
    return this.http.put<ITipoCategoria>(`${this.UrlBase}/${tipocategoria.id}`, tipocategoria);
  }

  Delete(tipocategoriaId: number): Observable<ITipoCategoria>  {
    return this.http.delete<ITipoCategoria>(`${this.UrlBase}/${tipocategoriaId}`);
  }

}
