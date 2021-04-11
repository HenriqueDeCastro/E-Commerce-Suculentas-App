import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser';
import { IVenda } from 'src/app/shared/models/IVenda';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-compras-status',
  templateUrl: './compras-status.component.html',
  styleUrls: ['./compras-status.component.scss']
})
export class ComprasStatusComponent implements OnInit {

  public Vendas: IVenda[];
  private statusId: number;
  public User: IUser;

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.statusId = this.activetedRoute.snapshot.params.statusId;
    this.VerificarStatus();
  }

  VerificarStatus() {
    if(this.statusId = environment.AguardandoEnvio) {}
  }

}
