import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { ICategoriaPagination } from 'src/app/shared/models/ICategoriaPagination';
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

  GetByCliente(categoriaId: number, pageAtual: number, orderBy: string, search: string): Observable<ICategoriaPagination> {
    return this.http.get<ICategoriaPagination>(`${this.UrlBase}/getCliente?id=${categoriaId}&pageAtual=${pageAtual}&orderBy=${orderBy}&search=${search}`);
  }

  GetByEmpresa(categoriaId: number, pageAtual: number, orderBy: string, search: string): Observable<ICategoriaPagination> {
    return this.http.get<ICategoriaPagination>(`${this.UrlBase}/getEmpresa?id=${categoriaId}&pageAtual=${pageAtual}&orderBy=${orderBy}&search=${search}`);
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
