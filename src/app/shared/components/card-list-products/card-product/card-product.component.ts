import { VerifyProductTypeService } from './../../../../core/services/verify-product-type/verify-product-type.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/iproduct';
import { environment } from 'src/environments/environment';
import { IProductType } from 'src/app/shared/models/iproduct-type';
import { ProductTypes } from 'src/app/shared/enums/product-types';

const API = environment.urlApi;

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() company!: boolean;
  @Input() productTypes!: IProductType[];
  public type!: IProductType;
  public types = ProductTypes;
  public urlImage: string = `${API}/resources/Mini/`;

  constructor(
    private router: Router,
    private verifyProductTypeService: VerifyProductTypeService
  ) { }

  ngOnInit(): void {
    this.type = this.verifyProductTypeService.objectById(this.productTypes, this.product.productTypeId ?? 0);
  }


  navigation(): void {
    if(this.company) {
      this.router.navigate(['/company/product/edit', this.product.id])
    } else {
      this.router.navigate(['/products/', this.product.name, this.product.id])
    }
  }
}
