import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-quantity',
  templateUrl: './btn-quantity.component.html',
  styleUrls: ['./btn-quantity.component.scss']
})
export class BtnQuantityComponent implements OnInit {

  @Input() quantity!: number;
  @Input() maximumQuantity!: number;
  @Output() quantityChosen = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  increaseQuantity(): void {
    this.quantity++;
    this.quantityChosen.emit(this.quantity);
  }

  decreaseQuantity(): void {
    this.quantity--;
    this.quantityChosen.emit(this.quantity);
  }

}
