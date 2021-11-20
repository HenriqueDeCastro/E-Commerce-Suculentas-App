import { TextButton } from './../../../enums/text-button';
import { MessagesSnackbar } from './../../../enums/messages-snackbar';
import { StatusSale } from './../../../enums/status-sale';
import { Component, Input, OnInit } from '@angular/core';
import { ISale } from 'src/app/shared/models/isale';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { SaleService } from 'src/app/core/services/sale/sale.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-form-sale-edit',
  templateUrl: './form-sale-edit.component.html',
  styleUrls: ['./form-sale-edit.component.scss']
})
export class FormSaleEditComponent implements OnInit {

  @Input() sale!: ISale;
  public saleForm!: FormGroup;
  public selectedStatus!: number;
  public statusSale!: number;
  public disableBtn!: boolean;
  public txtBtn = TextButton.finish;
  public statusSalesEnum = StatusSale;
  public status = [{id: this.statusSalesEnum.awaiting_payment, desc: 'Aguardando Pagamento'},
                   {id: this.statusSalesEnum.waiting_to_sent, desc: 'Aguardando Envio'},
                   {id: this.statusSalesEnum.sent, desc: 'Enviado'},
                   {id: this.statusSalesEnum.finished, desc: 'Finalizado'},
                   {id: this.statusSalesEnum.canceled, desc: 'Cancelado'},
                   {id: this.statusSalesEnum.in_dispute, desc: 'Em Disputa'},];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private saleService: SaleService,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit() {
    this.selectedStatus, this.statusSale = this.sale.statusId!;
    this.validation();
  }

  validation(): void {
    this.saleForm = this.fb.group({
      status: [this.selectedStatus, [Validators.required]],
      address: [{value: this.sale.address, disabled: false}, [Validators.required]],
      trackingCode: [{value: this.sale.trackingCode, disabled: false}],
    });

    this.subscribeForm();
  }

  subscribeForm() {
    this.saleForm.get('status')?.valueChanges
    .subscribe(value => {
      if(this.selectedStatus == this.statusSalesEnum.sent) {
        this.saleForm.get('trackingCode')?.setValidators([Validators.required]);
      } else {
        this.saleForm.get('trackingCode')?.clearValidators();
      }

      this.saleForm.get('trackingCode')?.updateValueAndValidity();
    });
  }

  editSale() {
    if (this.saleForm.valid) {
      if(this.checkChange()) {
        this.disableBtn = true;
        this.txtBtn = TextButton.registering;
        this.updateSale();
      } else {
        this.snackbar.openError('Não houve nenhuma alteração nos campos');
      }
    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }

  checkChange() {
    if(this.saleForm.get('status')?.value != this.statusSale || this.saleForm.get('address')?.value != this.sale.address) {
      return true;
    } else {
      return false;
    }
  }

  updateSale() {
    this.sale.trackingCode = this.saleForm.get('trackingCode')?.value;
    this.sale.statusId = this.saleForm.get('status')?.value;
    this.sale.address = this.saleForm.get('address')?.value;

    this.saleService.put(this.sale).subscribe((sale: ISale) => {
        this.snackbar.openSuccess(MessagesSnackbar.successfully_edited);
        this.location.back();
      },
      error => {
        this.disableBtn = false;
        this.txtBtn = TextButton.finish;
        this.snackbar.openError(MessagesSnackbar.server_error);
    })
  }

}
