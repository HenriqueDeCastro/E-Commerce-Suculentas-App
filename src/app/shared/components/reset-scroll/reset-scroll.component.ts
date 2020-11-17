import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetScrollComponent {

  constructor() { }

  PositionZero(): void {
    if (typeof document === 'object' && document) {
      const sidenavContent = document.querySelector('.mat-drawer-content');
      if (sidenavContent) {
        sidenavContent.scrollTop = 0;
      }
    }
  }
}
