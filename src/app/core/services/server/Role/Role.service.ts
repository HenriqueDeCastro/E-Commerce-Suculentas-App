import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRole } from 'src/app/shared/models/IRole';
import { IUserRole } from 'src/app/shared/models/IUserRole';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private UrlBase = `${environment.UrlApi}/role`;

  constructor(private http: HttpClient) { }

  GetRole(): Observable<IRole[]>   {
    return this.http.get<IRole[]>(`${this.UrlBase}/GetRole`);
  }

  Post(role: IRole): Observable<IRole>   {
    return this.http.post<IRole>(`${this.UrlBase}/CreateRole`, role);
  }

  UpdateUserRole(userRole: IUserRole)  {
    return this.http.put(`${this.UrlBase}/UpdateUserRole`, userRole);
  }
}
