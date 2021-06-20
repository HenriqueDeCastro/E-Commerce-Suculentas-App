import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IUser } from 'src/app/shared/models/IUser';
import { IVenda } from 'src/app/shared/models/IVenda';
import { IVendasPagination } from 'src/app/shared/models/IVendasPagination';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vendas-status',
  templateUrl: './vendas-status.component.html',
  styleUrls: ['./vendas-status.component.scss']
})
export class VendasStatusComponent implements OnInit {

  public Vendas: IVenda[];
  public User: IUser;
  public Titulo: string;
  public statusNaoTem: string;
  public PaginaAtual = 0;
  public UltimaPagina = false;
  private statusId: number;

  constructor(private activetedRoute: ActivatedRoute,
              public router: Router,
              private vendaService: VendaService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService,
              public progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.progressBarService.Mostrar(true);
    this.statusId = this.activetedRoute.snapshot.params.statusId;
    this.ReceberVendas();
  }

  ReceberVendas() {
    if(this.VerificarStatus()) {
      this.GetVendas();
    }
    else {
      this.progressBarService.Mostrar(false);
      this.router.navigate(['/empresa']);
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

  Navegar(idVenda: number) {
    this.router.navigate(['/user/perfil/compras/detalhe/' + idVenda]);
  }

  VerMais() {
    this.PaginaAtual++;
    this.GetVendas();
  }

  GetVendas() {
    this.progressBarService.Mostrar(true);

    this.vendaService.GetByStatusId(this.statusId, this.PaginaAtual).subscribe((vendasPagination: IVendasPagination) => {

      this.UltimaPagina = vendasPagination.ultimaPagina;

      if(this.Vendas == undefined) {
        this.Vendas = vendasPagination.vendas;
        this.progressBarService.Mostrar(false);
      }
      else {
        this.Vendas = this.Vendas.concat(vendasPagination.vendas);
      }

      this.progressBarService.Mostrar(false);
    },
    error => {
      this.progressBarService.Mostrar(false);
      console.error(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }
}
