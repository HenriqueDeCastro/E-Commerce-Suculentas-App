import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dados-perfil',
  templateUrl: './dados-perfil.component.html',
  styleUrls: ['./dados-perfil.component.scss']
})
export class DadosPerfilComponent implements OnInit {

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
