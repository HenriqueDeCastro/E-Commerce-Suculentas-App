import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarComponent {

  constructor(private _SNACKBAR: MatSnackBar) { }

  OpenSnackBarSuccess(message: string): void {
    this._SNACKBAR.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-success']
    });
  }

  OpenSnackBarError(message: string): void {
    this._SNACKBAR.open(message, '', {
      duration: 4000,
      panelClass: ['snackbar-error']
    });
  }
}
