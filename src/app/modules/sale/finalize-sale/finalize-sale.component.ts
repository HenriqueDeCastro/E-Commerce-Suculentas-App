import { MessagesSnackbar } from './../../../shared/enums/messages-snackbar';
import { SnackbarService } from './../../../core/services/snackbar/snackbar.service';
import { ICalculateShipping } from './../../../shared/models/icalculate-shipping';
import { MelhorEnvioService } from './../../../core/services/melhor-envio/melhor-envio.service';
import { IAddress } from './../../../shared/models/iaddress';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Component, OnInit } from '@angular/core';
import { ProductTypes } from 'src/app/shared/enums/product-types';

@Component({
  selector: 'app-finalize-sale',
  templateUrl: './finalize-sale.component.html',
  styleUrls: ['./finalize-sale.component.scss']
})
export class FinalizeSaleComponent implements OnInit {

  public products!: IProductCart[];
  public adresses!: IAddress[];
  public addressSelect!: IAddress;
  public productsType = ProductTypes;
  public type!: string;
  public shipping!: ICalculateShipping;
  public total!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private melhorEnvioService: MelhorEnvioService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.receiveValues();

    if(this.products?.length == 0)
      this.router.navigate(['/cart'])
  }

  receiveValues(): void {
    this.type = this.activatedRoute.snapshot.params.productTypeName as string;

    this.activatedRoute.params.subscribe((params) => {
      this.products = this.activatedRoute.snapshot.data['products'];
      this.adresses = this.activatedRoute.snapshot.data['adresses'];
    })
  }

  receiveAddress(address: IAddress): void {
    this.addressSelect = address;

    if(this.type.toLocaleUpperCase() == this.productsType.inventory) {
      this.calculateShipping();
    }
  }

  calculateShipping(): void {
    if (this.addressSelect) {
      this.melhorEnvioService.calculateShippingPackage(this.addressSelect.cep).subscribe((result: ICalculateShipping) => {
        this.shipping = result;
      },
      (erro) => {
        this.snackbar.openError(MessagesSnackbar.error_server_melhor_envio);
      });
    } else {
      this.snackbar.openError('Selecione o endereço de entrega');
    }
  }

  receiveTotal(value: number): void {
    this.total = value;
  }

  finalize(): void {

  }
}
