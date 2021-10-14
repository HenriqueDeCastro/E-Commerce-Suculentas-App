import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-orderby',
  templateUrl: './bottom-orderby.component.html',
  styleUrls: ['./bottom-orderby.component.scss']
})
export class BottomOrderbyComponent implements OnInit {

  public company!: boolean;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private bottomSheetRef: MatBottomSheetRef<BottomOrderbyComponent>
    ) { }

  ngOnInit(): void {
    this.receiveData();
  }

  receiveData(): void {
    if (this.data) {
      this.company = this.data.company ?? false;
    }
  }

  closeBottoom(value: string): void{
    this.bottomSheetRef.dismiss(value);
  }
}
