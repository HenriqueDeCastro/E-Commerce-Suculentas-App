import { IProductType } from './../../../../shared/models/iproduct-type';
import { ICategory } from 'src/app/shared/models/icategory';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-product-home',
  templateUrl: './company-product-home.component.html',
  styleUrls: ['./company-product-home.component.scss']
})
export class CompanyProductHomeComponent implements OnInit {

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
