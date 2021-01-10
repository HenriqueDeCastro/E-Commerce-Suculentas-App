import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPacoteFrete } from 'src/app/shared/models/IPacoteFrete';
import { Observable } from 'rxjs';
import { ICalculoFrete } from 'src/app/shared/models/ICalculoFrete';

@Injectable({
  providedIn: 'root'
})
export class MelhorEnvioService {

  private UrlBase = `${environment.UrlApiMelhorEnvio}`;

  constructor(private http: HttpClient) {}

  CalcularFretePacote(cepCliente: string): Observable<ICalculoFrete>  {

    let pacoteFrete: IPacoteFrete = {
      from: {
        postal_code: `${environment.CEP_Suculentas}`
      },
      to: {
        postal_code: cepCliente
      },
      package: {
        height: 22,
        width: 22,
        length: 22,
        weight: 1.5
      },
      services: '3'
    }

    const raw = JSON.stringify(pacoteFrete);

    const reqHeader = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${environment.TokenMelhorEnvio}`,
      'User-Agent': 'Aplicação suculentasdarô@gmail.com'
   });

    return this.http.post<ICalculoFrete>(`${this.UrlBase}/api/v2/me/shipment/calculate`, raw, {headers: reqHeader});
  }

  CalcularFretePacoteTodosServicos(cepCliente: string): Observable<ICalculoFrete[]>  {

    let pacoteFrete: IPacoteFrete = {
      from: {
        postal_code: `${environment.CEP_Suculentas}`
      },
      to: {
        postal_code: cepCliente
      },
      package: {
        height: 22,
        width: 22,
        length: 22,
        weight: 1.5
      },
      services: '1,2,3,4'
    }

    const raw = JSON.stringify(pacoteFrete);

    const reqHeader = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${environment.TokenMelhorEnvio}`,
      'User-Agent': 'Aplicação suculentasdarô@gmail.com'
   });

    return this.http.post<ICalculoFrete[]>(`${this.UrlBase}/api/v2/me/shipment/calculate`, raw, {headers: reqHeader});
  }
}
