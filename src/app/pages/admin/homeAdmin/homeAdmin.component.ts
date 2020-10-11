import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-homeAdmin',
  templateUrl: './homeAdmin.component.html',
  styleUrls: ['./homeAdmin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  public User: IUser;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.RecebeserLogado();
  }

  RecebeserLogado(): void{
    this.User = JSON.parse(localStorage.getItem('user'));
  }
}
