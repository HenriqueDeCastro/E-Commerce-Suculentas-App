import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IRole } from 'src/app/shared/models/irole';
import { IRoleByUser } from 'src/app/shared/models/irole-by-user';
import { IUserRole } from 'src/app/shared/models/iuser-role';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private urlEndPointApi = `${API}/role`;

  constructor(private http: HttpClient) { }

  getRole(): Observable<IRole[]>   {
    return this.http.get<IRole[]>(`${this.urlEndPointApi}/getRole`);
  }

  getRoleByUser(): Observable<IRoleByUser[]>   {
    return this.http.get<IRoleByUser[]>(`${this.urlEndPointApi}/getRoleAndUsers`);
  }

  post(role: IRole): Observable<IRole>   {
    return this.http.post<IRole>(`${this.urlEndPointApi}/createRole`, role);
  }

  updateUserRole(userRole: IUserRole)  {
    return this.http.put(`${this.urlEndPointApi}/updateUserRole`, userRole);
  }
}
