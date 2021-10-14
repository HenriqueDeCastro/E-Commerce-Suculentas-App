import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  public user$: Observable<IUser> = this.userService.returnUser();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
