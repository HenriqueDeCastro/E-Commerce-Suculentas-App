import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { IUser } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-bottom-delete-promover',
  templateUrl: './bottom-delete-promover.component.html',
  styleUrls: ['./bottom-delete-promover.component.scss']
})
export class BottomDeletePromoverComponent implements OnInit {

  public User: IUser;
  public RoleName: string;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
              private bottomSheetRef: MatBottomSheetRef<BottomDeletePromoverComponent>) { }

  ngOnInit() {
    this.ReceberUserRole();
  }

  ReceberUserRole(): void {
    if (this.data) {
      this.User = this.data.user;
      this.RoleName = this.data.roleName;
    }
  }

  FecharBottom(value: string): void{
    this.bottomSheetRef.dismiss(value);
  }
}
