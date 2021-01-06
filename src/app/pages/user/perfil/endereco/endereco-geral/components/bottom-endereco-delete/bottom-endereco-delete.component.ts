import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { IEndereco } from 'src/app/shared/models/IEndereco';

@Component({
  selector: 'app-bottom-endereco-delete',
  templateUrl: './bottom-endereco-delete.component.html',
  styleUrls: ['./bottom-endereco-delete.component.scss']
})
export class BottomEnderecoDeleteComponent implements OnInit {

  Endereco: IEndereco;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
              private bottomSheetRef: MatBottomSheetRef<BottomEnderecoDeleteComponent>) { }

  ngOnInit(): void {
    this.ReceberEndereco();
  }

  ReceberEndereco(): void {
    if (this.data) {
      this.Endereco = this.data.endereco;
    }
  }

  FecharBottom(value: string): void{
    this.bottomSheetRef.dismiss(value);
  }
}
