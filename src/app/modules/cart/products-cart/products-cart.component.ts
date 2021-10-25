import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const API = environment.urlApi;

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit {

  @Input() products!: IProductCart[];
  public urlImage: string = `${API}/resources/Normal/`;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(product: IProductCart): void {
    this.router.navigate(['/products', product.name, product.id]);
  }
}
