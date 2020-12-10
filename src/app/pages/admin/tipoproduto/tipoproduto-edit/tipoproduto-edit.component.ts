import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoProdutoService } from 'src/app/core/services/TipoProduto/TipoProduto.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';

@Component({
  selector: 'app-tipoproduto-edit',
  templateUrl: './tipoproduto-edit.component.html',
  styleUrls: ['./tipoproduto-edit.component.scss']
})
export class TipoprodutoEditComponent implements OnInit {


  private TipoProdutoId: number;
  public TipoProduto: ITipoProduto;
  public TipoProdutoForm: FormGroup;
  public EditandoTipoProduto = false;

  constructor(private fb: FormBuilder,
              public router: Router,
              private activetedRoute: ActivatedRoute,
              private tipoProdutoService: TipoProdutoService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.ReceberTipoCategoria();
  }

  ReceberValorRota(): void {
    this.TipoProdutoId = this.activetedRoute.snapshot.params.tipoProdutoId;
  }

  ReceberTipoCategoria(): void {
    this.tipoProdutoService.GetById(this.TipoProdutoId).subscribe((tipoProduto: ITipoProduto) => {
      this.TipoProduto = tipoProduto;
      this.Validation(this.TipoProduto);
    });
  }

  Validation(tipoProduto: ITipoProduto): void {
    this.TipoProdutoForm = this.fb.group({
      nome: [{value: tipoProduto.nome, disabled: false}, [Validators.required]]
    });
  }

  Editar(): void {
    if (this.TipoProdutoForm.valid) {
      this.EditandoTipoProduto = true;
      this.TipoProduto.nome = this.TipoProdutoForm.value.nome;
      this.tipoProdutoService.Put(this.TipoProduto).subscribe(
        () => {
          this.EditandoTipoProduto = false;
          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.AtualizacaoConcluida);
          this.router.navigate(['admin/tipoproduto']);
        },
        error => {
          this.EditandoTipoProduto = false;
          console.log(error);
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
        });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }

}
