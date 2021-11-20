import { IAddress } from './../../../shared/models/iaddress';
import { Component, Input, OnInit } from '@angular/core';
import { ProductTypes } from 'src/app/shared/enums/product-types';
import { ICalculateShipping } from 'src/app/shared/models/icalculate-shipping';
import { AddressSuculentas } from 'src/app/shared/enums/address-suculentas';

@Component({
  selector: 'app-shipping-value',
  templateUrl: './shipping-value.component.html',
  styleUrls: ['./shipping-value.component.scss']
})
export class ShippingValueComponent implements OnInit {

  @Input() type!: string;
  @Input() addressClient!: IAddress;
  @Input() shipping!: ICalculateShipping;
  public productTypes = ProductTypes;
  public addressSuculentas = AddressSuculentas;

  constructor() { }

  ngOnInit(): void {
  }

}
