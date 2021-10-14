import { MessagesSnackbar } from './../../../shared/enums/messages-snackbar';
import { TextButton } from './../../../shared/enums/text-button';
import { ICalculateShipping } from './../../../shared/models/icalculate-shipping';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { MelhorEnvioService } from 'src/app/core/services/melhor-envio/melhor-envio.service';

@Component({
  selector: 'app-company-manual-freight',
  templateUrl: './company-manual-freight.component.html',
  styleUrls: ['./company-manual-freight.component.scss']
})
export class CompanyManualFreightComponent implements OnInit {

  public shippingForm!: FormGroup;
  public shippingValues!: ICalculateShipping[];
  public calculating: boolean = false;
  public textBtn: string = TextButton.calculate;

  constructor(
    private snackbar: SnackbarService,
    private fb: FormBuilder,
    private melhorEnvioService: MelhorEnvioService
  ) { }

  ngOnInit() {
    this.Validation();
  }

  Validation(): void {
    this.shippingForm = this.fb.group({
      cep: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  clearShipping(): void {
    this.calculating = false;
    this.textBtn = TextButton.calculate;
    this.shippingValues = null!;
  }

  calculateShipping(): void {
    console.log('aqui')
    if(this.shippingForm.valid) {
      this.calculating = true;
      this.textBtn = TextButton.calculating;


      this.melhorEnvioService.calculateShippingPackageAllServices(this.shippingForm.get('cep')?.value).subscribe((result: ICalculateShipping[]) => {
        this.shippingValues = result;
      },
      (erro) => {
        console.error(erro);

        this.calculating = false;
        this.textBtn = TextButton.calculate;
        this.snackbar.openError(MessagesSnackbar.error_server_melhor_envio);
      });
    }
    else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }
}
