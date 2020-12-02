import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public User: IUser;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.RecebeserLogado();
  }

  Logout(): void {
    localStorage.removeItem(environment.VariavelToken);
    this.router.navigate(['/user/login']);
  }

  RecebeserLogado(): void{
    this.User = JSON.parse(localStorage.getItem(environment.VariavelUsuario));
  }
}
