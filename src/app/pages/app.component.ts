import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/server/Auth/Auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RotasSiteComponent } from 'src/app/shared/components/Rotas-Site/Rotas-Site.component';
import { environment } from '../../environments/environment';
import { ResetScrollService } from 'src/app/core/services/shared/ResetScroll/ResetScroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService,
              private route: Router,
              private bottomSheet: MatBottomSheet,
              public router: Router,
              private resetScroll: ResetScrollService) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.resetScroll.PositionZero();
    });
  }

  Logado(): boolean {
    return this.authService.LoggedIn();
  }

  PerfilNavegacao(): void {
    if (!this.Logado()){
      this.route.navigate(['/user/perfil']);
    } else {
      this.route.navigate(['/user/login']);
    }
  }

  openBottomSheet(): void {
    this.bottomSheet.open(RotasSiteComponent);
  }

  QuantidadeCarrinho(): any {
    const quantidade = JSON.parse(localStorage.getItem(environment.VariavelQuantidade));

    if(quantidade > 0)
    {
      return quantidade
    }
    else {
      return null
    }
  }
}
