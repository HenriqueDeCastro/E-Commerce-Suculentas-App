import { Component, Input, OnInit } from '@angular/core';
import { AddressSuculentas } from 'src/app/shared/enums/address-suculentas';
import { ISale } from 'src/app/shared/models/isale';

@Component({
  selector: 'app-list-sale-detail-shipping',
  templateUrl: './list-sale-detail-shipping.component.html',
  styleUrls: ['./list-sale-detail-shipping.component.scss']
})
export class ListSaleDetailShippingComponent implements OnInit {

  @Input() sale!: ISale;
  public addressSuculentas = AddressSuculentas;

  constructor() { }

  ngOnInit(): void {
  }

}
