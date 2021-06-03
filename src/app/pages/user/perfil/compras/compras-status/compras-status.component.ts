import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
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
  public User: IUser;
  public Titulo: string;
  public statusNaoTem: string;
  private statusId: number;

  constructor(private activetedRoute: ActivatedRoute,
              public router: Router,
              private vendaService: VendaService,
              private authService: AuthService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService,
              private progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.progressBarService.Mostrar();
    this.statusId = this.activetedRoute.snapshot.params.statusId;
    this.ReceberVendas();
  }

  ReceberVendas() {
    if(this.VerificarStatus()) {
      this.User = this.ReceberLogado();
      this.vendaService.GetByUserId(this.User.id, this.statusId).subscribe((vendas: IVenda[]) => {
        this.Vendas = vendas;
        this.progressBarService.Mostrar();
      },
      error => {
        this.progressBarService.Mostrar();
        console.error(error);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      });
    }
    else {
      this.progressBarService.Mostrar();
      this.router.navigate(['/user/perfil']);
    }
  }

  VerificarStatus(): boolean {
    if(this.statusId == environment.AguardandoPagamento){
      this.Titulo = 'Aguardando Pagamento';
      this.statusNaoTem = 'aguardando pagamento';
      return true;
    }
    else if(this.statusId == environment.AguardandoEnvio)
    {
      this.Titulo = 'Aguardando Envio';
      this.statusNaoTem = 'aguardando envio';
      return true;
    }
    else if(this.statusId == environment.Enviado)
    {
      this.Titulo = 'Enviadas';
      this.statusNaoTem = 'enviada';
      return true;
    }
    else if(this.statusId == environment.Finalizado)
    {
      this.Titulo = 'Finalizadas';
      this.statusNaoTem = 'finalizada';
      return true;
    }
    else if(this.statusId == environment.Cancelado)
    {
      this.Titulo = 'Canceladas';
      this.statusNaoTem = 'cancelada';
      return true;
    }
    else if(this.statusId == environment.EmDisputa)
    {
      this.Titulo = 'Em Disputa';
      this.statusNaoTem = 'em disputa';
      return true;
    }
    else {
      return false;
    }
  }

  ReceberLogado(): IUser{
    return this.authService.GetUserToken();
  }

  Navegar(idVenda: number) {
    this.router.navigate(['/user/perfil/compras/detalhe/' + idVenda]);
  }
}
