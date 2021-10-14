import { Observable } from 'rxjs/internal/Observable';
import { QuantityCartService } from './../services/quantity-cart/quantity-cart.service';
import { BottomSheetToolbarComponent } from './bottom-sheet-toolbar/bottom-sheet-toolbar.component';
import { DeviceService } from './../services/device/device.service';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public mobile!: boolean;
  public quantity$!: Observable<number>;

  constructor(
    private deviceService: DeviceService,
    private bottomSheet: MatBottomSheet,
    private quantityCartService: QuantityCartService
  ) { }

  ngOnInit(): void {
    this.mobile = this.deviceService.itsMobile();
    this.quantity$ = this.quantityCartService.returnQuantityObservable();
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetToolbarComponent);
  }
}
