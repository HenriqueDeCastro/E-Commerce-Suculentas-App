import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoryPagination } from 'src/app/shared/models/icategory-pagination';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

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
