import { MessagesSnackbar } from './../../../../../shared/enums/messages-snackbar';
import { TextButton } from './../../../../../shared/enums/text-button';
import { AddressService } from './../../../../../core/services/address/address.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-view-delete',
  templateUrl: './view-delete.component.html',
  styleUrls: ['./view-delete.component.scss']
})
export class ViewDeleteComponent implements OnInit {

  @Input() addressId!: number;
  @Output() action = new EventEmitter<boolean>();
  public deleting: boolean = false;
  public txt: string = TextButton.delete;

  constructor(
    private addressService: AddressService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
  }

  Cancelar() {
    this.action.emit(false);
  }

  delete() {
    this.deleting = true;
    this.txt = TextButton.deleting;

    this.addressService.delete(this.addressId).subscribe((result: any) => {
      this.snackbar.openSuccess(MessagesSnackbar.delete_completed);
      this.action.emit(true);
    },
    erro => {
      this.deleting = true;
      this.txt = TextButton.delete;
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }
}
