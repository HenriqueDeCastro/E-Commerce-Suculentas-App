import { Component, Input, OnInit } from '@angular/core';
import { ISale } from 'src/app/shared/models/isale';

@Component({
  selector: 'app-list-sale-detail-client',
  templateUrl: './list-sale-detail-client.component.html',
  styleUrls: ['./list-sale-detail-client.component.scss']
})
export class ListSaleDetailClientComponent implements OnInit {

  @Input() sale!: ISale;

  constructor() { }

  ngOnInit(): void {
  }

}
