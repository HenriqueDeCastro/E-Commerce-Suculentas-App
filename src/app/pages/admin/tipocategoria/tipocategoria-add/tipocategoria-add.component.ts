import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoCategoriaService } from 'src/app/core/services/TipoCategoria/TipoCategoria.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ITipoCategoria } from 'src/app/shared/models/ITipoCategoria';
import { MensagemSnackbarComponent } from '../../../../shared/components/mensagem-snackbar/mensagem-snackbar.component';

@Component({
  selector: 'app-tipocategoria-add',
  templateUrl: './tipocategoria-add.component.html',
  styleUrls: ['./tipocategoria-add.component.scss']
})
export class TipocategoriaAddComponent implements OnInit {

  public TipoCategoriaForm: FormGroup;
  public RealizandoCadastro = false;
  private TipoCategoria: ITipoCategoria;

  constructor(private fb: FormBuilder,
              private router: Router,
              private tipoCategoriaService: TipoCategoriaService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.Validation();
  }

  Validation(): void {
    this.TipoCategoriaForm = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }

  Registrar(): void {
    if (this.TipoCategoriaForm.valid) {
      this.RealizandoCadastro = true;
      this.TipoCategoria = {
        nome: this.TipoCategoriaForm.value.nome
      };
      this.tipoCategoriaService.Post(this.TipoCategoria).subscribe(
        () => {
          this.RealizandoCadastro = false;
          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
          this.router.navigate(['admin/tipocategoria']);
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
