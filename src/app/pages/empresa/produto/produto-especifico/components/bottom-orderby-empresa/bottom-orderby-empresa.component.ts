import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-orderby-empresa',
  templateUrl: './bottom-orderby-empresa.component.html',
  styleUrls: ['./bottom-orderby-empresa.component.scss']
})
export class BottomOrderbyEmpresaComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomOrderbyEmpresaComponent>) { }

  ngOnInit(): void {}

  FecharBottoom(value: string): void{
    this.bottomSheetRef.dismiss(value);
  }
}
