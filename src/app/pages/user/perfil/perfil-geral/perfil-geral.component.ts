import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil-geral',
  templateUrl: './perfil-geral.component.html',
  styleUrls: ['./perfil-geral.component.scss']
})
export class PerfilGeralComponent implements OnInit {

  public User: IUser;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.ReceberUserLogado();
  }

  Logout(): void {
    localStorage.removeItem(environment.VariavelToken);
    this.router.navigate(['/user/login']);
  }

  ReceberUserLogado(): void{
    this.User = JSON.parse(localStorage.getItem(environment.VariavelUsuario));
  }

}
