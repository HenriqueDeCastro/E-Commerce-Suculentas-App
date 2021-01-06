import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEndereco } from 'src/app/shared/models/IEndereco';

@Component({
  selector: 'app-dialog-endereco-delete',
  templateUrl: './dialog-endereco-delete.component.html',
  styleUrls: ['./dialog-endereco-delete.component.scss']
})
export class DialogEnderecoDeleteComponent implements OnInit {

  public Endereco: IEndereco;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<DialogEnderecoDeleteComponent>) { }

  ngOnInit() {
    this.ReceberEndereco();
  }

  ReceberEndereco(): void {
    if (this.data) {
      this.Endereco = this.data.endereco;
    }
  }

  FecharDialog(value: string): void{
    this.dialogRef.close(value);
  }
}
