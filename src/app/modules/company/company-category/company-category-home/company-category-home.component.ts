import { ICategory } from 'src/app/shared/models/icategory';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-category-home',
  templateUrl: './company-category-home.component.html',
  styleUrls: ['./company-category-home.component.scss']
})
export class CompanyCategoryHomeComponent implements OnInit {

  public categorys!: ICategory[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categorys = this.activatedRoute.snapshot.data['categorys'];
    })
  }

}
