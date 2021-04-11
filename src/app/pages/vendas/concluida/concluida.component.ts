import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { IUser } from 'src/app/shared/models/IUser';

@Component({
  selector: 'app-concluida',
  templateUrl: './concluida.component.html',
  styleUrls: ['./concluida.component.scss']
})
export class ConcluidaComponent implements OnInit {

  public VendaId: number;
  public User: IUser;

  constructor(private activetedRoute: ActivatedRoute,
              private authService: AuthService,
              public router: Router) { }

  ngOnInit() {
    this.ReceberValorRota();
    this.ReceberUserLogado();
  }

  ReceberValorRota(): void {
    this.VendaId = this.activetedRoute.snapshot.params.idVenda;
  }

  ReceberUserLogado(): void{
    this.User = this.authService.GetUserToken();
  }
}
