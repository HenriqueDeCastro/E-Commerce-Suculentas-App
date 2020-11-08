import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/Auth/Auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RotasSiteComponent } from 'src/app/shared/components/Rotas-Site/Rotas-Site.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService,
              private route: Router,
              private bottomSheet: MatBottomSheet,
              public router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.resetScrollPosition();
    });
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

  resetScrollPosition(): void {
    if (typeof document === 'object' && document) {
      const sidenavContent = document.querySelector('.mat-drawer-content');
      if (sidenavContent) {
        sidenavContent.scrollTop = 0;
      }
    }
  }

  openBottomSheet(): void {
    this.bottomSheet.open(RotasSiteComponent);
  }
}
