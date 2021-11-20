import { IProductCart } from './../../../shared/models/iproduct-cart';
import { ITableTotal } from './../../../shared/models/itable-total';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICalculateShipping } from 'src/app/shared/models/icalculate-shipping';

@Component({
  selector: 'app-table-total',
  templateUrl: './table-total.component.html',
  styleUrls: ['./table-total.component.scss']
})
export class TableTotalComponent implements OnInit {

  @Input() products!: IProductCart[];
  @Input() shipping!: ICalculateShipping;
  @Output() returnTotal = new EventEmitter<number>();
  public total: number = 0;
  public DataSource: ITableTotal[] = [];
  public displayedColumns = ['Item', 'Valor'];

  constructor() { }

  ngOnInit(): void {
    this.makeDataSource();
    this.calculateTotal();
  }

  makeDataSource(): void {
    this.products?.forEach((product: IProductCart) => {
      const auxDataSource: ITableTotal = {
        item: `${product.quantityOrder}un. de ${product.name}`,
        valor: product.price * product.quantityOrder
      }
      this.DataSource.push(auxDataSource);
    })

    if(this.shipping) {
      const auxDataSource: ITableTotal = {
        item: 'Frete',
        valor: Number(this.shipping.price)
      }
      this.DataSource.push(auxDataSource);
    }
  }

  calculateTotal(): void {
    this.total = this.DataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0);
    this.returnTotal.emit(this.total);
  }
}
