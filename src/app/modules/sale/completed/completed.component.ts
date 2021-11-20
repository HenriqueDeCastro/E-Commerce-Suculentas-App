import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  public user$: Observable<IUser> = this.userService.returnUser();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
