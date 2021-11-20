import { IOrder } from './../../../models/iorder';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/iproduct';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  @Input() orders!: IOrder[];
  public urlImage: string = `${API}/resources/Normal/`;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(product: IProduct): void {
    this.router.navigate(['/products', product.name, product.id]);
  }
}
