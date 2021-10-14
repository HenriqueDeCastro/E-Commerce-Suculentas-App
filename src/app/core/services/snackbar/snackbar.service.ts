import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  openSuccess(message: string, timer = 3000): void {
    this.snackbar.open(message, '', {
      duration: timer,
      panelClass: ['snackbar-success']
    });
  }

  openError(message: string, timer = 3000): void {
    this.snackbar.open(message, '', {
      duration: timer,
      panelClass: ['snackbar-error']
    });
  }
}
