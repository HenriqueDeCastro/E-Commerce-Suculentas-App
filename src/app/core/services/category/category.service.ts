import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/shared/models/icategory';
import { ICategoryPagination } from 'src/app/shared/models/icategory-pagination';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private urlEndPointApi = `${API}/category`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.urlEndPointApi}`);
  }

  getAllWithoutProducts(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.urlEndPointApi}/getWithoutProducts`);
  }

  getPagHomepageCompany(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.urlEndPointApi}/getPagHomepageCompany`);
  }

  getHomepage(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.urlEndPointApi}/getHomepage`);
  }

  getById(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.urlEndPointApi}/${id}`);
  }

  getByClient(id: number, currentPage: number, orderBy: string, search: string): Observable<ICategoryPagination> {
    return this.http.get<ICategoryPagination>(`${this.urlEndPointApi}/getClient?id=${id}&currentPage=${currentPage}&orderBy=${orderBy}&search=${search}`);
  }

   getByCompany(id: number, currentPage: number, orderBy: string, search: string): Observable<ICategoryPagination> {
    return this.http.get<ICategoryPagination>(`${this.urlEndPointApi}/getCompany?id=${id}&currentPage=${currentPage}&orderBy=${orderBy}&search=${search}`);
  }

  post(category: ICategory): Observable<ICategory>   {
    return this.http.post<ICategory>(`${this.urlEndPointApi}`, category) ;
  }

  put(category: ICategory): Observable<ICategory>   {
    return this.http.put<ICategory>(`${this.urlEndPointApi}/${category.id}`, category);
  }

  delete(id: number): Observable<ICategory>  {
    return this.http.delete<ICategory>(`${this.urlEndPointApi}/${id}`);
  }
}
