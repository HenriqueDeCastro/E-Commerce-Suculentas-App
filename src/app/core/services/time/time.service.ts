import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  returnsCurrentDateForName(): string {
    const dNow = new Date();
    const localdate = dNow.getDate() + '_' + (dNow.getMonth() + 1) + '_' + dNow.getFullYear() + '_' +
      'T_' + dNow.getHours() + '_' + dNow.getMinutes() + '_' + dNow.getSeconds();
    return localdate;
  }
}
