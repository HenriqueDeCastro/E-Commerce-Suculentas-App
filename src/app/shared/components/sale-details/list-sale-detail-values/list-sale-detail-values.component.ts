import { Component, Input, OnInit } from '@angular/core';
import { ISale } from 'src/app/shared/models/isale';

@Component({
  selector: 'app-list-sale-detail-values',
  templateUrl: './list-sale-detail-values.component.html',
  styleUrls: ['./list-sale-detail-values.component.scss']
})
export class ListSaleDetailValuesComponent implements OnInit {

  @Input() sale!: ISale;

  constructor() { }

  ngOnInit(): void {
  }

}
