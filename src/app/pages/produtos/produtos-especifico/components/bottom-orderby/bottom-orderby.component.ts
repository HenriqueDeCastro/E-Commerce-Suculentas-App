import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-orderby',
  templateUrl: './bottom-orderby.component.html',
  styleUrls: ['./bottom-orderby.component.scss']
})
export class BottomOrderbyComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomOrderbyComponent>) { }

  ngOnInit(): void {}

  FecharBottoom(value: string): void{
    this.bottomSheetRef.dismiss(value);
  }
}
