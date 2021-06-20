import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/models/IUser';
import { IVendasCount } from 'src/app/shared/models/IVendasCount';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public User: IUser;
  public CountAguardandoPagamento = null;
  public CountAguardandoEnvio = null;
  public CountEnviado = null;
  public CountFinalizado = null;
  public CountCancelado = null;
  public CountEmDisputa = null;
  public Carregou = false;
  public env = environment;

  constructor(public router: Router,
              private vendaService: VendaService,
              private progressBarService: ProgressBarService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.progressBarService.Mostrar(true);
    this.ReceberLogado();
    this.ReceberCountVendas();
  }

  ReceberLogado(): void{
    this.User = this.authService.GetUserToken();
  }

  ReceberCountVendas() {
    this.vendaService.GetByStatusCountEmpresa().subscribe((vendas: IVendasCount[]) => {
      vendas.forEach((venda: IVendasCount) => {
        this.NumeroVendasPorStatus(venda);
      });
      this.Carregou = true;
      this.progressBarService.Mostrar(false);
    },
    error => {
      this.Carregou = true;
      this.progressBarService.Mostrar(false);
      console.error(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    })
  }

  NumeroVendasPorStatus(vendasCount: IVendasCount) {
    if(vendasCount.statusId == this.env.AguardandoPagamento) {
      this.CountAguardandoPagamento = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.env.AguardandoEnvio) {
      this.CountAguardandoEnvio = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.env.Enviado) {
      this.CountEnviado = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.env.Finalizado) {
      this.CountFinalizado = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.env.Cancelado) {
      this.CountCancelado = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.env.EmDisputa) {
      this.CountEmDisputa = vendasCount.countVenda;
    }
  }

  Navegar(status: number) {
    this.router.navigate(['empresa/vendas/' + status]);
  }
}
