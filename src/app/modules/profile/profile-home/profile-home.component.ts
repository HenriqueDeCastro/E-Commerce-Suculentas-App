import { StatusSale } from './../../../shared/enums/status-sale';
import { ISaleCount } from './../../../shared/models/isale-count';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/iuser';
import { UserService } from 'src/app/core/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  public user$: Observable<IUser> = this.userService.returnUser();
  public saleCount!: ISaleCount[];
  public statusSale = StatusSale;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.saleCount = this.activatedRoute.snapshot.data['saleCount'];
    })
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['user/login'])
  }
}
