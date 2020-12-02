import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCategoriaService } from 'src/app/core/services/TipoCategoria/TipoCategoria.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ITipoCategoria } from 'src/app/shared/models/ITipoCategoria';

@Component({
  selector: 'app-tipocategoria-edit',
  templateUrl: './tipocategoria-edit.component.html',
  styleUrls: ['./tipocategoria-edit.component.scss']
})
export class TipocategoriaEditComponent implements OnInit {

  private TipoCategoriaId: number;
  public TipoCategoria: ITipoCategoria;
  public TipoCategoriaForm: FormGroup;
  public EditandoCategoria = false;

  constructor(private fb: FormBuilder,
              public router: Router,
              private activetedRoute: ActivatedRoute,
              private tipoCategoriaService: TipoCategoriaService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.ReceberTipoCategoria();
  }

  ReceberValorRota(): void {
    this.TipoCategoriaId = this.activetedRoute.snapshot.params.tipoCategoriaId;
  }

  ReceberTipoCategoria(): void {
    this.tipoCategoriaService.GetById(this.TipoCategoriaId).subscribe((tipoCategoria: ITipoCategoria) => {
      this.TipoCategoria = tipoCategoria;
      this.Validation(this.TipoCategoria);
    });
  }

  Validation(tipoCategoria: ITipoCategoria): void {
    this.TipoCategoriaForm = this.fb.group({
      nome: [{value: tipoCategoria.nome, disabled: false}, [Validators.required]]
    });
  }

  Editar(): void {
    if (this.TipoCategoriaForm.valid) {
      this.EditandoCategoria = true;
      this.TipoCategoria.nome = this.TipoCategoriaForm.value.nome;
      this.tipoCategoriaService.Put(this.TipoCategoria).subscribe(
        () => {
          this.EditandoCategoria = false;
          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.AtualizacaoConcluida);
          this.router.navigate(['admin/tipocategoria']);
        },
        error => {
          this.EditandoCategoria = false;
          console.log(error);
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
        });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
