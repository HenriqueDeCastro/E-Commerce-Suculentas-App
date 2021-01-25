import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoProdutoService } from 'src/app/core/services/server/TipoProduto/TipoProduto.service';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';
import { SnackbarService } from '../../../../core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from '../../../../core/services/shared/Mensagens/Mensagens.service';

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
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService) { }

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
