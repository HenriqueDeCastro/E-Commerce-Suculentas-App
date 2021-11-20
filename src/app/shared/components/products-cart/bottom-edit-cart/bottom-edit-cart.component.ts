import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-edit-cart',
  templateUrl: './bottom-edit-cart.component.html',
  styleUrls: ['./bottom-edit-cart.component.scss']
})
export class BottomEditCartComponent implements OnInit {

  public product!: IProductCart;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private bottomSheetRef: MatBottomSheetRef<BottomEditCartComponent>
  ) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    if (this.data) {
      this.product = this.data.product;
    }
  }

  closeBottoom(value: boolean): void{
    this.bottomSheetRef.dismiss(value);
  }

}
