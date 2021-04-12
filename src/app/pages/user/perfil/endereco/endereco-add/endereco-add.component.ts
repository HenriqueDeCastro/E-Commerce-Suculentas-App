import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { IEstado } from 'src/app/shared/models/IEstado';
import { ICidade } from 'src/app/shared/models/ICidade';
import { EstadosService } from '../../../../../core/services/shared/Estados/Estados.service';
import { CidadesService } from '../../../../../core/services/shared/Cidades/Cidades.service';
import { EnderecoService } from '../../../../../core/services/server/Endereco/Endereco.service';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { IUser } from 'src/app/shared/models/IUser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-endereco-add',
  templateUrl: './endereco-add.component.html',
  styleUrls: ['./endereco-add.component.scss']
})
export class EnderecoAddComponent implements OnInit {

  public Estados: IEstado[];
  public Cidades: ICidade[];
  public IdentificacaoForm: FormGroup;
  public DomicilioForm: FormGroup;
  public Procurandocidades: boolean = false;
  public DesabilitarEstados: boolean= false;
  public DesabilitarCidades: boolean= true;
  public Registrando: boolean = false;
  public TextoBotao = 'Finalizar';

  constructor(private estadosService: EstadosService,
              private cidadeService: CidadesService,
              private enderecoService: EnderecoService,
              private snackbar: SnackbarService,
              private fb: FormBuilder,
              private authService: AuthService,
              public router: Router,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
    this.progressBarService.Mostrar();
    this.ReceberEstados();
    this.ValidationIdentificacao();
    this.ValidationDomicilio();
  }

  ReceberEstados() {
    this.Estados = this.estadosService.GetEstados();
    this.progressBarService.Mostrar();
  }

  ValidationIdentificacao(): void {
    this.IdentificacaoForm = this.fb.group({
      apelido: [''],
      estado: ['', [Validators.required]],
      cidade: [{value: '', disabled: true}, [Validators.required]],
      bairro: [{value: '', disabled: true}, [Validators.required]]
    });
  }

  ValidationDomicilio(): void {
    this.DomicilioForm = this.fb.group({
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: [''],
      cep: ['', [Validators.required, Validators.minLength(8)]]
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

  Registrar() {
    if (this.IdentificacaoForm.valid && this.DomicilioForm.valid) {
      this.progressBarService.Mostrar();
      this.Registrando = true;
      this.TextoBotao = 'Adicionando';

      const user: IUser = this.authService.GetUserToken();
      let Endereco: IEndereco = {
        descricao: this.IdentificacaoForm.value.apelido,
        cidade: this.IdentificacaoForm.value.cidade,
        estado: this.IdentificacaoForm.value.estado,
        rua: this.DomicilioForm.value.rua,
        numero: this.DomicilioForm.value.numero,
        complemento: this.DomicilioForm.value.complemento,
        cep: this.DomicilioForm.value.cep,
        bairro: this.IdentificacaoForm.value.bairro,
        userId: user.id
      }
      this.enderecoService.Post(Endereco).subscribe((enderecos: IEndereco) => {
        this.progressBarService.Mostrar();

        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
        this.router.navigate(['user/perfil/endereco']);
      },
      erro => {
        this.Registrando = false;
        this.progressBarService.Mostrar();
        this.TextoBotao = 'Finalizar';

        console.log(erro);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
