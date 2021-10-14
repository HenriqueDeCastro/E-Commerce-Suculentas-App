import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { IAddress } from './../../../../shared/models/iaddress';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/iuser';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from 'src/app/core/services/device/device.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomDeleteComponent } from './bottom-delete/bottom-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-address-home',
  templateUrl: './profile-address-home.component.html',
  styleUrls: ['./profile-address-home.component.scss']
})
export class ProfileAddressHomeComponent implements OnInit {

  public addresses!: IAddress[];
  public mobile!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.mobile = this.deviceService.itsMobile();
    this.receiveAddresses();
  }

  receiveAddresses() {
    this.activatedRoute.params.subscribe((params) => {
      this.addresses = this.activatedRoute.snapshot.data['addresses'];
    })
  }

  navigateAdd(): void {
    this.router.navigate(['/profile/address/add']);
  }

  navigateEdit(id: number): void {
    this.router.navigate(['/profile/address/edit/', id]);
  }

  defineDevice(id: number): void {
    if(this.mobile) {
      this.openBottomSheet(id);
    } else {
      this.openDialog(id);
    }
  }

  openBottomSheet(id: number): void {
    const bottomSheetRef = this.bottomSheet.open(BottomDeleteComponent, {
      data: {
        id: id,
      }
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.resultDelete(result);
    });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {
        id: id,
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.resultDelete(result);
    });
  }

  resultDelete(result: boolean): void {
    if(result) {
      console.log(result)
      this.router.navigate([]).finally(() => {
        this.receiveAddresses()
      })
    }
  }
}
