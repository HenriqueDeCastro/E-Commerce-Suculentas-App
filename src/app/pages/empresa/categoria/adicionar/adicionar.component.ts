import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { TipoCategoriaService } from 'src/app/core/services/TipoCategoria/TipoCategoria.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ITipoCategoria } from 'src/app/shared/models/ITipoCategoria';
import { ICategoria } from '../../../../shared/models/ICategoria';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  public CategoriaForm: FormGroup;
  public RealizandoCadastro = false;
  private Categoria: ICategoria;
  public TiposCategorias: ITipoCategoria[];
  public selected: number;

  constructor(private fb: FormBuilder,
              public router: Router,
              private categoriaService: CategoriaService,
              private tipoCategoriaService: TipoCategoriaService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.Validation();
    this.ReceberTipoCategorias();
  }

  Validation(): void {
    this.CategoriaForm = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      tipocategoria: [null, [Validators.required]]
    });
  }

  ReceberTipoCategorias(): void {
    this.tipoCategoriaService.GetAllSemCategoria().subscribe((tipoCategorias: ITipoCategoria[]) => {
      this.TiposCategorias = tipoCategorias;
    });
  }

  Registrar(): void {
    if (this.CategoriaForm.valid) {
      this.RealizandoCadastro = true;
      this.Categoria = {
        nome: this.CategoriaForm.value.nome,
        descricao: this.CategoriaForm.value.descricao,
        ativo: true,
        tipoCategoriaId: this.selected
      };
      this.categoriaService.Post(this.Categoria).subscribe(
        () => {
          this.RealizandoCadastro = false;
          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
          this.router.navigate(['empresa/categoria']);
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
