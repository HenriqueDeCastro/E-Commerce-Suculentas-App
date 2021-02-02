import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-Rotas-Site',
  templateUrl: './Rotas-Site.component.html',
  styleUrls: ['./Rotas-Site.component.scss']
})
export class RotasSiteComponent implements OnInit {

  public AcessAdmin: boolean;
  public AcessEmpresa: boolean;
  public Logado: boolean;

  constructor(private bottomSheetRef: MatBottomSheetRef<RotasSiteComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
              private authService: AuthService,
              public router: Router) { }

  ngOnInit(): void {
    this.ReceberProduto();
  }

  ReceberProduto(): void {
    if (this.data) {
      this.AcessAdmin = this.data.admin;
      this.AcessEmpresa = this.data.empresa;
      this.Logado = this.data.logado;
    }
  }

  PerfilNavegacao(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    if (!this.Logado){
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
