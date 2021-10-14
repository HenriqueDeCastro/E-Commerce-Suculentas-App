import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComparePasswordsService {

  constructor() { }

  compare(fbs: FormGroup): void {
    const confirmSenhaCtrl = fbs.get('confirmedPassword');
    if (confirmSenhaCtrl?.errors == null || 'mismatch' in confirmSenhaCtrl.errors) {
      if (fbs?.get('password')?.value !== confirmSenhaCtrl?.value) {
        fbs?.get('confirmedPassword')?.setErrors({ mismatch: true});
      } else {
        confirmSenhaCtrl?.setErrors(null);
      }
    }
  }
}
