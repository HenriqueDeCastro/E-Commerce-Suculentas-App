import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-cart',
  templateUrl: './dialog-edit-cart.component.html',
  styleUrls: ['./dialog-edit-cart.component.scss']
})
export class DialogEditCartComponent implements OnInit {

  public product!: IProductCart;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogEditCartComponent>
  ) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    if (this.data) {
      this.product = this.data.product;
    }
  }

  closeDialog(value: boolean): void{
    this.dialogRef.close(value);
  }
}
