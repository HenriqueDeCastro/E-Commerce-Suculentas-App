import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MelhorEnvioService } from 'src/app/core/services/server/MelhorEnvio/MelhorEnvio.service';
import { ICalculoFrete } from 'src/app/shared/models/ICalculoFrete';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

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

  constructor(private snackbar: SnackbarService,
              private fb: FormBuilder,
              private melhorEnvioService: MelhorEnvioService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

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
      this.progressBarService.Mostrar();
      this.Calculando = true;
      this.TextoBotao = 'Calculando...';

      this.melhorEnvioService.CalcularFretePacoteTodosServicos(this.FreteForm.value.cep).subscribe((result: ICalculoFrete[]) => {
        localStorage.setItem(environment.VariavelCEP, this.FreteForm.value.cep);
        this.progressBarService.Mostrar();
        this.Calculando = false;
        this.TextoBotao = 'Calcular';
        this.ValoresFretes = result;
      },
      (erro) => {
        console.error(erro);
        this.progressBarService.Mostrar();
        this.Calculando = false;
        this.TextoBotao = 'Calcular';
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidorMelhorEnvio);
      });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCampoCEPPreenchido);
    }
  }
}
