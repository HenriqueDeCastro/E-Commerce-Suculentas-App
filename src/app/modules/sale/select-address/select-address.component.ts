import { Router } from '@angular/router';
import { IAddress } from './../../../shared/models/iaddress';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductTypes } from 'src/app/shared/enums/product-types';

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss']
})
export class SelectAddressComponent implements OnInit {

  @Input() adresses!: IAddress[];
  @Input() type!: string;
  @Output() addressSend = new EventEmitter<IAddress>();
  public productTypes = ProductTypes;
  public addressSelection!: IAddress;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['/profile/address/home'])
  }

  sendAddress(address: IAddress): void {
    this.addressSend.emit(address);
  }
}
