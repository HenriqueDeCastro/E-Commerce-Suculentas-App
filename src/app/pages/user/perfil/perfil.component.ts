import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public User: IUser;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.RecebeserLogado();
  }

  Logout(): void {
    localStorage.removeItem('token');
    this.route.navigate(['/user/login']);
  }

  RecebeserLogado(): void{
    this.User = JSON.parse(localStorage.getItem('user'));
  }
}
