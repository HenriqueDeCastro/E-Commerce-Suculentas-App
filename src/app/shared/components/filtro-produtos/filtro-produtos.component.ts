import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-filtro-produtos',
  templateUrl: './filtro-produtos.component.html',
  styleUrls: ['./filtro-produtos.component.scss']
})
export class FiltroProdutosComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<FiltroProdutosComponent>) { }

  ngOnInit() {
  }

}
