import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private UrlBase = `${environment.UrlApi}/categoria`;

  constructor(private http: HttpClient) { }

  GetAll(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this.UrlBase}`);
  }

  GetAllSemProduto(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this.UrlBase}/getSemProduto`);
  }

  GetAllPagInicialEmpresa(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this.UrlBase}/getPagInicialEmpresa`);
  }

  GetAllPagInicial(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this.UrlBase}/getPagInicial`);
  }

  GetById(categoriaId: number): Observable<ICategoria> {
    return this.http.get<ICategoria>(`${this.UrlBase}/${categoriaId}`);
  }

  GetByIdCliente(categoriaId: number): Observable<ICategoria> {
    return this.http.get<ICategoria>(`${this.UrlBase}/getCliente/${categoriaId}`);
  }

  GetByIdEmpresa(categoriaId: number): Observable<ICategoria> {
    return this.http.get<ICategoria>(`${this.UrlBase}/getEmpresa/${categoriaId}`);
  }

  Post(categoria: ICategoria): Observable<ICategoria>   {
    return this.http.post<ICategoria>(`${this.UrlBase}`, categoria) ;
  }

  Put(categoria: ICategoria): Observable<ICategoria>   {
    return this.http.put<ICategoria>(`${this.UrlBase}/${categoria.id}`, categoria);
  }

  Delete(categoriaId: number): Observable<ICategoria>  {
    return this.http.delete<ICategoria>(`${this.UrlBase}/${categoriaId}`);
  }
}
