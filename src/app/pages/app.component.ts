import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/server/Auth/Auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RotasSiteComponent } from 'src/app/shared/components/Rotas-Site/Rotas-Site.component';
import { environment } from '../../environments/environment';
import { ResetScrollService } from 'src/app/core/services/shared/ResetScroll/ResetScroll.service';
import * as WebFont from 'webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public userRoles: string[];
  public AcessAdmin: boolean;
  public AcessEmpresa: boolean;

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
      this.AcessAdmin = this.AdminAcesso();
      this.AcessEmpresa = this.EmpresaAcesso();
      this.resetScroll.PositionZero();
    });

    WebFont.load({
      custom: { families: ['Material Icons', 'Material Icons Outline', 'Bakerie']}
    });
  }

  EmpresaAcesso(): boolean {
    if(!this.Logado()) {
      return this.authService.VerifyAcessRole(environment.RoleEmpresa);
    } else {
      return false;
    }
  }

  AdminAcesso(): boolean {
    if(!this.Logado()) {
      return this.authService.VerifyAcessRole(environment.RoleAdmin);
    } else {
      return false;
    }
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
    this.bottomSheet.open(RotasSiteComponent, {
      data: {
        admin: this.AcessAdmin,
        empresa: this.AcessEmpresa,
        logado: this.Logado()
      }
    });
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
