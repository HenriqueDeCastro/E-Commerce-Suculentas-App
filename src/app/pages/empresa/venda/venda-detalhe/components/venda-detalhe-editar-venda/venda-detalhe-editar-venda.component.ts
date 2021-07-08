import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IVenda } from 'src/app/shared/models/IVenda';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-venda-detalhe-editar-venda',
  templateUrl: './venda-detalhe-editar-venda.component.html',
  styleUrls: ['./venda-detalhe-editar-venda.component.scss']
})
export class VendaDetalheEditarVendaComponent implements OnInit {

  @Input() Venda: IVenda;
  public VendaForm: FormGroup;
  public selectedStatus: number;
  private statusVenda: number;
  public env = environment;
  public Desabilitar = false;
  public TextoBotao = 'Salvar';
  public Status = [{id: environment.AguardandoPagamento, descricao: 'Aguardando Pagamento'},
                   {id: environment.AguardandoEnvio, descricao: 'Aguardando Envio'},
                   {id: environment.Enviado, descricao: 'Enviado'},
                   {id: environment.Finalizado, descricao: 'Finalizado'},
                   {id: environment.Cancelado, descricao: 'Cancelado'},
                   {id: environment.EmDisputa, descricao: 'Em Disputa'},];

  constructor(private fb: FormBuilder,
              private location: Location,
              private vendaService: VendaService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
    this.selectedStatus = this.Venda.statusId;
    this.statusVenda = this.Venda.statusId;
    this.Validation();
  }

  Validation(): void {
    this.VendaForm = this.fb.group({
      status: [this.selectedStatus, [Validators.required]],
      endereco: [{value: this.Venda.endereco, disabled: false}, [Validators.required]],
      codigoRastreio: [{value: this.Venda.codigoRastreio, disabled: false}],
    });

    this.SubscribeForm();
  }

  SubscribeForm() {
    this.VendaForm.get('status').valueChanges
    .subscribe(value => {
      if(this.selectedStatus == this.env.Enviado) {
        this.VendaForm.get('codigoRastreio').setValidators([Validators.required]);
      } else {
        this.VendaForm.get('codigoRastreio').clearValidators();
      }

      this.VendaForm.get('codigoRastreio').updateValueAndValidity();
    });
  }

  EditarVenda() {
    if (this.VendaForm.valid) {
      if(this.VerificaAlteracao()) {
        this.Desabilitar = true;
        this.progressBarService.Mostrar(true);
        this.TextoBotao = 'Editando';
        this.UpdateVenda();
      } else {
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposSemAlteracao);
      }
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }

  VerificaAlteracao() {
    if(this.VendaForm.get('status').value != this.statusVenda || this.VendaForm.get('endereco').value != this.Venda.endereco) {
      return true;
    } else {
      return false;
    }
  }

  UpdateVenda() {
    this.Venda.codigoRastreio = this.VendaForm.get('codigoRastreio').value;
    this.Venda.statusId = this.VendaForm.get('status').value;
    this.Venda.endereco = this.VendaForm.get('endereco').value;

    this.vendaService.Put(this.Venda).subscribe((venda:IVenda) => {
        this.progressBarService.Mostrar(false);

        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.AtualizacaoConcluida);
        this.location.back();
      },
      error => {
        this.Desabilitar = false;
        this.TextoBotao = 'Editar';
        this.progressBarService.Mostrar(false);

        console.error(error);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    })
  }
}
