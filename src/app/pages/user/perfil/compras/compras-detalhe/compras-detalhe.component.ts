import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IPedido } from 'src/app/shared/models/IPedido';
import { IVenda } from 'src/app/shared/models/IVenda';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-compras-detalhe',
  templateUrl: './compras-detalhe.component.html',
  styleUrls: ['./compras-detalhe.component.scss']
})
export class ComprasDetalheComponent implements OnInit {

  public Venda: IVenda;
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
    this.vendaService.GetById(this.vendaId).subscribe((venda: IVenda) => {
      this.Venda = venda;
      this.progressBarService.Mostrar(false);
    },
    error => {
      this.progressBarService.Mostrar(false);
      console.error(error);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

   CheckoutPagSeguro() {
    window.location.href = environment.UrlPagSegurosCheckout + this.Venda.codigoTransacao;
   }
}
