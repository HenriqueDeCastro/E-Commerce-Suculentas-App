import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MelhorEnvioService } from 'src/app/core/services/MelhorEnvio/MelhorEnvio.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICalculoFrete } from 'src/app/shared/models/ICalculoFrete';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-frete-manual',
  templateUrl: './frete-manual.component.html',
  styleUrls: ['./frete-manual.component.scss']
})
export class FreteManualComponent implements OnInit {

  public FreteForm: FormGroup;
  public ValoresFretes: ICalculoFrete[];
  public Calculando: boolean = false;
  public TextoBotao: string = 'Calcular';

  constructor(private snackbar: SnackbarComponent,
              private fb: FormBuilder,
              private melhorEnvioService: MelhorEnvioService,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit() {
    this.Validation();
  }

  Validation(): void {
    this.FreteForm = this.fb.group({
      cep: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  LimparFretes() {
    this.ValoresFretes = null
  }

  CalcularFrete(): void {
    if (this.FreteForm.valid) {
      this.Calculando = true;
      this.TextoBotao = 'Calculando...';
      this.melhorEnvioService.CalcularFretePacoteTodosServicos(this.FreteForm.value.cep).subscribe((result: ICalculoFrete[]) => {
        localStorage.setItem(environment.VariavelCEP, this.FreteForm.value.cep);
        this.Calculando = false;
        this.TextoBotao = 'Calcular';
        this.ValoresFretes = result;
      },
      (erro) => {
        console.log(erro);
        this.Calculando = false;
        this.TextoBotao = 'Calcular';
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidorMelhorEnvio);
      });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCampoCEPPreenchido);
    }
  }
}
