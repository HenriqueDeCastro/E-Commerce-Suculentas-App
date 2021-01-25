import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from '../../../../core/services/shared/Mensagens/Mensagens.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  private CategoriaId: number;
  public Categoria: ICategoria;
  public CategoriaForm: FormGroup;
  public EditandoCategoria = false;
  public selected: any;
  public selectedTipo: number;

  constructor(private fb: FormBuilder,
              public router: Router,
              private activetedRoute: ActivatedRoute,
              private categoriaService: CategoriaService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.ReceberCategoria();
  }

  ReceberValorRota(): void {
    this.CategoriaId = this.activetedRoute.snapshot.params.categoriaId;
  }

  ReceberCategoria(): void {
    this.categoriaService.GetById(this.CategoriaId).subscribe((categoria: ICategoria) => {
      this.Categoria = categoria;
      this.selected = String(this.Categoria.ativo);
      this.Validation(this.Categoria);
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
      this.EditandoCategoria = true;
      this.Categoria.nome = this.CategoriaForm.value.nome;
      this.Categoria.descricao = this.CategoriaForm.value.descricao;
      this.Categoria.ativo = this.selected;
      this.categoriaService.Put(this.Categoria).subscribe(
        () => {
          this.EditandoCategoria = false;
          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.AtualizacaoConcluida);
          this.router.navigate(['empresa/categoria']);
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
