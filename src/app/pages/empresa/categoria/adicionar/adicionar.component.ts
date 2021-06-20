import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { SnackbarService } from '../../../../core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from '../../../../core/services/shared/Mensagens/Mensagens.service';
import { ICategoria } from '../../../../shared/models/ICategoria';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  public CategoriaForm: FormGroup;
  public RealizandoCadastro = false;
  public selected: number;
  public TextoBotao = 'Cadastrar';
  private Categoria: ICategoria;

  constructor(private fb: FormBuilder,
              public router: Router,
              private categoriaService: CategoriaService,
              private snackbar: SnackbarService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.Validation();
  }

  Validation(): void {
    this.CategoriaForm = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

  Registrar(): void {
    if (this.CategoriaForm.valid) {
      this.progressBarService.Mostrar(true);
      this.TextoBotao = 'Cadastrando';
      this.RealizandoCadastro = true;

      this.Categoria = {
        nome: this.CategoriaForm.value.nome,
        descricao: this.CategoriaForm.value.descricao,
        ativo: true
      };
      this.categoriaService.Post(this.Categoria).subscribe(
        () => {
          this.progressBarService.Mostrar(false);

          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
          this.router.navigate(['empresa/categoria']);
        },
        error => {
          this.TextoBotao = 'Cadastrar';
          this.RealizandoCadastro = false;
          this.progressBarService.Mostrar(false);

          console.error(error);
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
        });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
