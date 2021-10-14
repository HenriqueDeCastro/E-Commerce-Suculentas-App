import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm-relegation',
  templateUrl: './dialog-confirm-relegation.component.html',
  styleUrls: ['./dialog-confirm-relegation.component.scss']
})
export class DialogConfirmRelegationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogConfirmRelegationComponent>
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  delete(): void {
    this.dialogRef.close(true);
  }
}
