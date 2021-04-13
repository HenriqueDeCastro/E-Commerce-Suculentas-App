import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/server/Auth/Auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RotasSiteComponent } from 'src/app/shared/components/Rotas-Site/Rotas-Site.component';
import { environment } from '../../environments/environment';
import { ResetScrollService } from 'src/app/core/services/shared/ResetScroll/ResetScroll.service';
import * as WebFont from 'webfontloader';
import { IUser } from '../shared/models/IUser';
import { CryptService } from '../core/services/shared/Crypt/Crypt.service';
import { ProgressBarService } from '../core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public userRoles: string[];
  public AcessAdmin: boolean;
  public AcessEmpresa: boolean;
  public teste: IUser;

  constructor(private authService: AuthService,
              private bottomSheet: MatBottomSheet,
              private cryptService: CryptService,
              public router: Router,
              public progressBarService: ProgressBarService,
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
      this.router.navigate(['/user/perfil']);
    } else {
      this.router.navigate(['/user/login']);
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
    const quantidade = localStorage.getItem(environment.VariavelQuantidade);

    if(quantidade)
    {
      const quantidadeDescrypt = Number(this.cryptService.descryptText(quantidade));
      return quantidadeDescrypt
    }
    else {
      return null
    }
  }
}
