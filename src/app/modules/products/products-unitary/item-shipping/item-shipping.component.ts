import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { TextButton } from './../../../../shared/enums/text-button';
import { SnackbarService } from './../../../../core/services/snackbar/snackbar.service';
import { MelhorEnvioService } from './../../../../core/services/melhor-envio/melhor-envio.service';
import { CepService } from './../../../../core/services/cep/cep.service';
import { Component, OnInit } from '@angular/core';
import { ICalculateShipping } from 'src/app/shared/models/icalculate-shipping';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item-shipping',
  templateUrl: './item-shipping.component.html',
  styleUrls: ['./item-shipping.component.scss']
})
export class ItemShippingComponent implements OnInit {

  public valueShipping!: ICalculateShipping;
  public cepCookie!: string;
  public shippingForm!: FormGroup;
  public disableBTn: boolean = false;
  public txtBtn: string = TextButton.calculate;

  constructor(
    private cepService: CepService,
    private melhorEnvioService: MelhorEnvioService,
    private snackbar: SnackbarService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validation();
    this.checkCEPCookie();
  }

  validation(): void {
    this.shippingForm = this.fb.group({
      cep: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  checkCEPCookie() {
    if(this.cepService.hasCEP()) {
      this.cepCookie = this.cepService.returnCEP();
      this.melhorEnvioService.calculateShippingPackage(this.cepCookie).subscribe((result: ICalculateShipping) => {
        this.valueShipping = result;
      },
      (erro) => {
        this.snackbar.openError(MessagesSnackbar.error_server_melhor_envio);
      });
    }
  }

  calculateShipping() {
    if (this.shippingForm.valid) {
      this.disableBTn = true;
      this.txtBtn = TextButton.calculating;
      const cep = this.shippingForm.get('cep')?.value;

      this.melhorEnvioService.calculateShippingPackage(cep).subscribe((result: ICalculateShipping) => {
        this.cepService.saveCEP(cep);
        this.cepCookie = cep;
        this.valueShipping = result;
        this.disableBTn = false;
        this.txtBtn = TextButton.calculate;
      },
      (erro) => {
        this.disableBTn = false;
        this.txtBtn = TextButton.calculate;
        this.snackbar.openError(MessagesSnackbar.error_server_melhor_envio);
      });
    } else {
      this.snackbar.openError("Preencha o campo de CEP");
    }
  }

  cleanCEP() {
    this.valueShipping = null!;
    this.cepCookie = null!;
    this.cepService.deleteCEP();
  }
}
