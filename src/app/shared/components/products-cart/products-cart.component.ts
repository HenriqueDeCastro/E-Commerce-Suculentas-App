import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/core/services/device/device.service';
import { environment } from 'src/environments/environment';
import { IProductCart } from '../../models/iproduct-cart';
import { BottomEditCartComponent } from './bottom-edit-cart/bottom-edit-cart.component';
import { DialogEditCartComponent } from './dialog-edit-cart/dialog-edit-cart.component';

const API = environment.urlApi;

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit {

  @Input() products!: IProductCart[];
  @Input() editBtn: boolean = false;
  @Output() resultValue = new EventEmitter<boolean>();
  public urlImage: string = `${API}/resources/Normal/`;
  public mobile!: boolean;

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.mobile = this.deviceService.itsMobile();
  }

  navigate(product: IProductCart): void {
    this.router.navigate(['/products', product.name, product.id]);
  }

  openEdit(product: IProductCart): void {
    if(this.mobile) {
      this.openBottomSheet(product);
    } else {
      this.openDialog(product);
    }
  }

  openBottomSheet(product: IProductCart): void {
    const bottomSheetRef = this.bottomSheet.open(BottomEditCartComponent, {
      data: {
        product: product
      }
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.returnResultEdit(result);
    });
  }

  openDialog(product: IProductCart): void {
    const dialogRef = this.dialog.open(DialogEditCartComponent, {
      data: {
        product: product
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.returnResultEdit(result);
    });
  }

  returnResultEdit(result: boolean) {
    this.resultValue.emit(result);
  }
}
