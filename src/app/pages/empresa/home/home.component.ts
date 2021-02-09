import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/IUser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
