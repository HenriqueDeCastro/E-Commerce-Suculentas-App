import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-toolbar',
  templateUrl: './bottom-sheet-toolbar.component.html',
  styleUrls: ['./bottom-sheet-toolbar.component.scss']
})
export class BottomSheetToolbarComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetToolbarComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any
  ) { }

  ngOnInit(): void {
  }

}
