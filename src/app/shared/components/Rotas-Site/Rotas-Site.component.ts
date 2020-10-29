import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/Auth.service';

@Component({
  selector: 'app-Rotas-Site',
  templateUrl: './Rotas-Site.component.html',
  styleUrls: ['./Rotas-Site.component.scss']
})
export class RotasSiteComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<RotasSiteComponent>,
              private authService: AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  Logado(): boolean {
    return this.authService.LoggedIn();
  }

  FecharBottoom(event: MouseEvent, link: string): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.router.navigate([link]);
  }
}
