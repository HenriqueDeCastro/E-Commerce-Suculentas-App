import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/Auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-Rotas-Site',
  templateUrl: './Rotas-Site.component.html',
  styleUrls: ['./Rotas-Site.component.scss']
})
export class RotasSiteComponent implements OnInit {

  urlWhatsapp: string;

  constructor(private bottomSheetRef: MatBottomSheetRef<RotasSiteComponent>,
              private authService: AuthService,
              public router: Router) { }

  ngOnInit(): void {
    this.urlWhatsapp = environment.UrlWhats;
  }

  Logado(): boolean {
    return this.authService.LoggedIn();
  }

  PerfilNavegacao(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    if (!this.Logado()){
      this.router.navigate(['/user/perfil']);
    } else {
      this.router.navigate(['/user/login']);
    }
  }

  FecharBottoom(event: MouseEvent, link: string): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.router.navigate([link]);
  }
}
