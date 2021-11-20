import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { StatusSale } from 'src/app/shared/enums/status-sale';
import { ISaleCount } from 'src/app/shared/models/isale-count';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {

  public user$: Observable<IUser> = this.userService.returnUser();
  public saleCount!: ISaleCount[];
  public statusSale = StatusSale;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.saleCount = this.activatedRoute.snapshot.data['saleCount'];
    })
  }

}
