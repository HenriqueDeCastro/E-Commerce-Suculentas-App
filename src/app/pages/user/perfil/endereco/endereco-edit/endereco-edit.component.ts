import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadesService } from 'src/app/core/services/server/Cidades/Cidades.service';
import { EnderecoService } from 'src/app/core/services/server/Endereco/Endereco.service';
import { EstadosService } from 'src/app/core/services/server/Estados/Estados.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ICidade } from 'src/app/shared/models/ICidade';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { IEstado } from 'src/app/shared/models/IEstado';

@Component({
  selector: 'app-endereco-edit',
  templateUrl: './endereco-edit.component.html',
  styleUrls: ['./endereco-edit.component.scss']
})
export class EnderecoEditComponent implements OnInit {

  private EnderecoId: number;
  public Endereco: IEndereco;
  public Estados: IEstado[];
  public Cidades: ICidade[];
  public Carregando: boolean = true;
  public IdentificacaoForm: FormGroup;
  public DomicilioForm: FormGroup;
  public Procurandocidades: boolean = false;
  public DesabilitarEstados: boolean= false;
  public DesabilitarCidades: boolean= true;
  public Atualizando: boolean = false;

  constructor(private fb: FormBuilder,
              public router: Router,
              private activetedRoute: ActivatedRoute,
              private enderecoService: EnderecoService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService,
              private estadosService: EstadosService,
              private cidadeService: CidadesService) { }

  ngOnInit() {
    this.ReceberValorRota();
    this.ReceberEndereco();
    this.ReceberEstados();
  }

  ReceberValorRota(): void {
    this.EnderecoId = this.activetedRoute.snapshot.params.enderecoId;
  }

  ReceberEndereco() {
    this.enderecoService.GetById(this.EnderecoId).subscribe((endereco: IEndereco) => {
      if(endereco) {
        this.Endereco = endereco;
        this.ReceberCidades();
      } else {
        this.Carregando = false;
      }
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  ReceberEstados() {
    this.Estados = this.estadosService.GetEstados();
  }

  ReceberCidades() {
    const estadoSelecionado = this.Estados.filter(estado => estado.uf == this.Endereco.estado)
    this.Cidades = this.cidadeService.GetCidadesByEstadoId(estadoSelecionado[0].id);
    this.ValidationIdentificacao();
    this.ValidationDomicilio();
    this.Carregando = false;
  }

  ValidationIdentificacao(): void {
    this.IdentificacaoForm = this.fb.group({
      apelido: [this.Endereco.descricao],
      estado: [this.Endereco.estado, [Validators.required]],
      cidade: [this.Endereco.cidade, [Validators.required]],
      bairro: [this.Endereco.bairro, [Validators.required]]
    });
  }

  ValidationDomicilio(): void {
    this.DomicilioForm = this.fb.group({
      rua: [this.Endereco.rua, [Validators.required]],
      numero: [this.Endereco.numero, [Validators.required]],
      complemento: [this.Endereco.complemento],
      cep: [this.Endereco.cep, [Validators.required, Validators.minLength(8)]]
    });
  }


  SelecaoEstado(estadoId: number) {
    this.Procurandocidades = true;
    this.IdentificacaoForm.controls["estado"].disable();
    this.IdentificacaoForm.controls["cidade"].disable();
    this.IdentificacaoForm.controls["bairro"].disable();

    this.Cidades = this.cidadeService.GetCidadesByEstadoId(estadoId);

    this.Procurandocidades = false;
    this.IdentificacaoForm.controls["estado"].enable();
    this.IdentificacaoForm.controls["cidade"].reset();
    this.IdentificacaoForm.controls["cidade"].enable();
    this.IdentificacaoForm.controls["bairro"].reset();
    this.IdentificacaoForm.controls["bairro"].enable();
  }

  Atualizar() {
    if (this.IdentificacaoForm.valid && this.DomicilioForm.valid) {
      this.Atualizando = true;
      let Endereco: IEndereco = {
        id: this.Endereco.id,
        descricao: this.IdentificacaoForm.value.apelido,
        cidade: this.IdentificacaoForm.value.cidade,
        estado: this.IdentificacaoForm.value.estado,
        rua: this.DomicilioForm.value.rua,
        numero: this.DomicilioForm.value.numero,
        complemento: this.DomicilioForm.value.complemento,
        cep: this.DomicilioForm.value.cep,
        bairro: this.IdentificacaoForm.value.bairro,
        userId: this.Endereco.userId
      }
      this.enderecoService.Put(Endereco).subscribe((enderecos: IEndereco) => {
        this.Atualizando = false;
        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.AtualizacaoConcluida);
        this.router.navigate(['user/perfil/endereco']);
      },
      erro => {
        console.log(erro);
        this.Atualizando = false;
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
