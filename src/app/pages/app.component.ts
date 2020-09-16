import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/Auth/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {
  }

  Logado(): boolean {
    return this.authService.LoggedIn();
  }

  IconePerfilNavegacao(): void {
    if (!this.Logado()){
      this.route.navigate(['/user/perfil']);
    } else {
      this.route.navigate(['/user/login']);
    }
  }
}
