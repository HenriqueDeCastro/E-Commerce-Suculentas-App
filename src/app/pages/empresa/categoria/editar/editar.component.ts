import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

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

  constructor(private fb: FormBuilder,
              public router: Router,
              private activetedRoute: ActivatedRoute,
              private categoriaService: CategoriaService,
              private snackbar: SnackbarComponent) { }

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
          this.snackbar.OpenSnackBarSuccess('Categoria atualizada com sucesso');
          this.router.navigate(['empresa/categoria']);
        },
        error => {
          this.EditandoCategoria = false;
          console.log(error);
          this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
        });
    } else {
      this.snackbar.OpenSnackBarError('Nem todos os campos foram preenchidos');
    }
  }
}
