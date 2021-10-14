import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/shared/models/icategory';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit {

  public categorys!: ICategory[]
  public productTypes!: IProductType[]

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categorys = this.activatedRoute.snapshot.data['categorys'];
      this.productTypes = this.activatedRoute.snapshot.data['productTypes'];
    })
  }
}
