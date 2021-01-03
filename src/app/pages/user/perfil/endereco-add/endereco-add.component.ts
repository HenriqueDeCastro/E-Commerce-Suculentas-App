import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IEstado } from 'src/app/shared/models/IEstado';
import { ICidade } from 'src/app/shared/models/ICidade';
import { EstadosService } from '../../../../core/services/Estados/Estados.service';
import { CidadesService } from '../../../../core/services/Cidades/Cidades.service';
import { EnderecoService } from '../../../../core/services/Endereco/Endereco.service';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/shared/models/IUser';
import { Router } from '@angular/router';

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
  public Atualizando: boolean = false;
  public step = 0;

  constructor(private estadosService: EstadosService,
              private cidadeService: CidadesService,
              private enderecoService: EnderecoService,
              private snackbar: SnackbarComponent,
              private fb: FormBuilder,
              public router: Router,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit() {
    this.ReceberEstados();
    this.ValidationIdentificacao();
    this.ValidationDomicilio();
  }

  ReceberEstados() {
    this.Estados = this.estadosService.GetEstados();
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

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  Registrar() {
    if (this.IdentificacaoForm.valid && this.DomicilioForm.valid) {
      this.Atualizando = true;
      const user: IUser = JSON.parse(localStorage.getItem(environment.VariavelUsuario))
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
        user.enderecos.push(enderecos);
        localStorage.setItem(environment.VariavelUsuario, JSON.stringify(user));
        this.Atualizando = false;
        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.EnderecoCadastro);
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
