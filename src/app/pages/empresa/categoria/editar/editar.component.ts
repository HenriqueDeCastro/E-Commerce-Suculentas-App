import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from '../../../../core/services/shared/Mensagens/Mensagens.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  private CategoriaId: number;
  public Categoria: ICategoria;
  public CategoriaForm: FormGroup;
  public Carregou: boolean = false;
  public EditandoCategoria = false;
  public selected: any;
  public selectedTipo: number;
  public TextoBotao = 'Editar';

  constructor(private fb: FormBuilder,
              public router: Router,
              private activetedRoute: ActivatedRoute,
              private categoriaService: CategoriaService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.progressBarService.Mostrar();
    this.ReceberValorRota();
    this.ReceberCategoria();
  }

  ReceberValorRota(): void {
    this.CategoriaId = this.activetedRoute.snapshot.params.categoriaId;
  }

  ReceberCategoria(): void {
    this.categoriaService.GetById(this.CategoriaId).subscribe((categoria: ICategoria) => {
      if(categoria) {
        this.Categoria = categoria;
        this.selected = String(this.Categoria.ativo);
        this.Validation(this.Categoria);

        this.Carregou = true;
        this.progressBarService.Mostrar();
      } else {
        this.Carregou = true;
        this.progressBarService.Mostrar();

        console.log(this.Categoria)
      }
    });
  }

  Validation(categoria: ICategoria): void {
    this.CategoriaForm = this.fb.group({
      nome: [{value: categoria.nome, disabled: false}, [Validators.required]],
      descricao: [{value: categoria.descricao, disabled: false}, [Validators.required]]
    });
  }

  Editar(): void {
    if (this.CategoriaForm.valid) {
      this.progressBarService.Mostrar();
      this.TextoBotao = 'Editando';
      this.EditandoCategoria = true;

      this.Categoria.nome = this.CategoriaForm.value.nome;
      this.Categoria.descricao = this.CategoriaForm.value.descricao;
      this.Categoria.ativo = this.selected;
      this.categoriaService.Put(this.Categoria).subscribe(
        () => {
          this.progressBarService.Mostrar();

          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.AtualizacaoConcluida);
          this.router.navigate(['empresa/categoria']);
        },
        error => {
          this.EditandoCategoria = false;
          this.TextoBotao = 'Editar';
          this.progressBarService.Mostrar();

          console.log(error);
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
        });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
