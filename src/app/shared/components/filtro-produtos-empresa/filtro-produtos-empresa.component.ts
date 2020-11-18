import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-filtro-produtos-empresa',
  templateUrl: './filtro-produtos-empresa.component.html',
  styleUrls: ['./filtro-produtos-empresa.component.scss']
})
export class FiltroProdutosEmpresaComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<FiltroProdutosEmpresaComponent>) { }

  ngOnInit(): void {
  }

  FecharBottoom(event: MouseEvent, value: string): void{
    this.bottomSheetRef.dismiss(value);
    event.preventDefault();
  }

}
