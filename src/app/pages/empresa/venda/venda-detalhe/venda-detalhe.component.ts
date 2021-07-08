import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IPedido } from 'src/app/shared/models/IPedido';
import { IUser } from 'src/app/shared/models/IUser';
import { IVenda } from 'src/app/shared/models/IVenda';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-venda-detalhe',
  templateUrl: './venda-detalhe.component.html',
  styleUrls: ['./venda-detalhe.component.scss']
})
export class VendaDetalheComponent implements OnInit {

  public Venda: IVenda;
  public User: IUser;
  private vendaId: number;
  public env = environment;

  constructor(private vendaService: VendaService,
              private activetedRoute: ActivatedRoute,
              private mensagemSnackbar: MensagensService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.progressBarService.Mostrar(true);
    this.vendaId = this.activetedRoute.snapshot.params.vendaId;
    this.ReceberVendas();
  }

  ReceberVendas() {
    this.vendaService.GetByIdEmpresa(this.vendaId).subscribe((venda: IVenda) => {
      this.Venda = venda;
      this.User = this.Venda.user;
      this.progressBarService.Mostrar(false);
    },
    error => {
      this.progressBarService.Mostrar(false);
      console.error(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }
}
