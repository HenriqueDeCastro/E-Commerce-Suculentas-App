import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/iuser';
import { UserService } from 'src/app/core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  public user$: Observable<IUser> = this.userService.returnUser();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
    this.router.navigate(['user/login'])
  }
}
