import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoProdutoService } from 'src/app/core/services/TipoProduto/TipoProduto.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';

@Component({
  selector: 'app-tipoproduto-add',
  templateUrl: './tipoproduto-add.component.html',
  styleUrls: ['./tipoproduto-add.component.scss']
})
export class TipoprodutoAddComponent implements OnInit {

  public TipoProdutoForm: FormGroup;
  public RealizandoCadastro = false;
  private TipoProduto: ITipoProduto;

  constructor(private fb: FormBuilder,
              private router: Router,
              private tipoProdutoService: TipoProdutoService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.Validation();
  }

  Validation(): void {
    this.TipoProdutoForm = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }

  Registrar(): void {
    if (this.TipoProdutoForm.valid) {
      this.RealizandoCadastro = true;
      this.TipoProduto = {
        nome: this.TipoProdutoForm.value.nome
      };
      this.tipoProdutoService.Post(this.TipoProduto).subscribe(
        () => {
          this.RealizandoCadastro = false;
          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
          this.router.navigate(['admin/tipoproduto']);
        },
        error => {
          this.RealizandoCadastro = false;
          console.log(error);
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
        });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }

}
