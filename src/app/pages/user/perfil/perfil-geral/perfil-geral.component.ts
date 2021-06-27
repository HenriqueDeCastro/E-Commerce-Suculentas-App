import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IUser } from 'src/app/shared/models/IUser';
import { IVendasCount } from 'src/app/shared/models/IVendasCount';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil-geral',
  templateUrl: './perfil-geral.component.html',
  styleUrls: ['./perfil-geral.component.scss']
})
export class PerfilGeralComponent implements OnInit {

  public User: IUser;
  public CountAguardandoPagamento = null;
  public CountAguardandoEnvio = null;
  public CountEnviado = null;
  public CountFinalizado = null;
  public CountCancelado = null;
  public CountEmDisputa = null;
  public StatusAguardandoPagamento = null;
  public StatusAguardandoEnvio = null;
  public StatusEnviado = null;
  public StatusFinalizado = null;
  public StatusCancelado = null;
  public StatusEmDisputa = null;
  public env = environment;
  public Carregou = false;

  constructor(public router: Router,
              private vendaService: VendaService,
              private progressBarService: ProgressBarService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.progressBarService.Mostrar(true);
    this.ReceberUserLogado();
    this.ReceberStatusEnvironment();
    this.ReceberCountVendas();
  }

  Logout(): void {
    localStorage.removeItem(environment.VariavelToken);
    this.router.navigate(['/user/login']);
  }

  ReceberUserLogado(): void{
    this.User = this.authService.GetUserToken();
  }

  ReceberStatusEnvironment() {
    this.StatusAguardandoPagamento = this.env.AguardandoPagamento;
    this.StatusAguardandoEnvio = this.env.AguardandoEnvio;
    this.StatusEnviado = this.env.Enviado;
    this.StatusFinalizado = this.env.Finalizado;
    this.StatusCancelado = this.env.Cancelado;
    this.StatusEmDisputa = this.env.EmDisputa;
  }

  ReceberCountVendas() {
    this.vendaService.GetByStatusCountUser(this.User.id).subscribe((vendas: IVendasCount[]) => {
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
    if(vendasCount.statusId == this.StatusAguardandoPagamento) {
      this.CountAguardandoPagamento = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.StatusAguardandoEnvio) {
      this.CountAguardandoEnvio = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.StatusEnviado) {
      this.CountEnviado = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.StatusFinalizado) {
      this.CountFinalizado = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.StatusCancelado) {
      this.CountCancelado = vendasCount.countVenda;
    }
    else if(vendasCount.statusId == this.StatusEmDisputa) {
      this.CountEmDisputa = vendasCount.countVenda;
    }
  }
}
