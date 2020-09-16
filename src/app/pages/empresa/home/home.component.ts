import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public User: IUser;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.RecebeserLogado();
  }

  RecebeserLogado(): void{
    this.User = JSON.parse(localStorage.getItem('user'));
  }

}
