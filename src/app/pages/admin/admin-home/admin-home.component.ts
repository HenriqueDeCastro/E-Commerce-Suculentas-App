import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  public User: IUser;

  constructor(public router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.ReceberLogado();
  }

  ReceberLogado(): void{
    this.User = this.authService.GetUserToken();
  }
}
