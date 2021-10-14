import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoryPagination } from 'src/app/shared/models/icategory-pagination';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Component({
  selector: 'app-company-product-category',
  templateUrl: './company-product-category.component.html',
  styleUrls: ['./company-product-category.component.scss']
})
export class CompanyProductCategoryComponent implements OnInit {

  public category!: ICategoryPagination;
  public productTypes!: IProductType[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.category = this.activatedRoute.snapshot.data['category'];
      this.productTypes = this.activatedRoute.snapshot.data['productsType'];
    })
  }

}
