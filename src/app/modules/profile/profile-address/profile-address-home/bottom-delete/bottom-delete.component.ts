import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-delete',
  templateUrl: './bottom-delete.component.html',
  styleUrls: ['./bottom-delete.component.scss']
})
export class BottomDeleteComponent implements OnInit {

  public addressId!: number;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private bottomSheetRef: MatBottomSheetRef<BottomDeleteComponent>
  ) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    if (this.data) {
      this.addressId = this.data.id;
    }
  }

  closeBottoom(value: boolean): void{
    this.bottomSheetRef.dismiss(value);
  }

}
