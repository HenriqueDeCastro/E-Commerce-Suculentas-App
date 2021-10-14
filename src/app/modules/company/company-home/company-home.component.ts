import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {

  public user$: Observable<IUser> = this.userService.returnUser();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
