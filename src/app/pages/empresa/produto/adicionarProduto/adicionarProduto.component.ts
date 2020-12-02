import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { IProduto } from 'src/app/shared/models/IProduto';
import { ProdutoService } from '../../../../core/services/Produto/Produto.service';
import { RenomearArquivoComponent } from '../../../../shared/components/renomear-arquivo/renomear-arquivo.component';

@Component({
  selector: 'app-adicionarProduto',
  templateUrl: './adicionarProduto.component.html',
  styleUrls: ['./adicionarProduto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {

  public file: File;
  public ProdutoForm: FormGroup;
  public RealizandoCadastro = false;
  public selected: number;
  public Categorias: ICategoria[];

  constructor(private fb: FormBuilder,
              public router: Router,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private renomear: RenomearArquivoComponent,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberCategorias();
    this.Validation();
  }

  Validation(): void {
    this.ProdutoForm = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      imagem: ['', [Validators.required]],
      categorias: [null, [Validators.required]],
      estoque: ['', [Validators.required]]
    });
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllSemProduto().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
    });
  }

  OnFileChange(event): void {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files;
    }
  }

  Registrar(): void {
    if (this.ProdutoForm.valid) {
      this.RealizandoCadastro = true;
      this.file = this.renomear.RenomearArquivo(this.file, this.ProdutoForm.value.nome);
      this.produtoService.postUpload(this.file).subscribe(
        () => {
          let produto: IProduto;
          produto = {
            nome: this.ProdutoForm.value.nome,
            descricao: this.ProdutoForm.value.descricao,
            preco: Number(this.ProdutoForm.value.preco),
            imagem: this.file[0].name,
            estoque: this.ProdutoForm.value.estoque,
            ativo: true,
            categoriaId: this.selected
          };
          this.produtoService.Post(produto).subscribe(
            () => {
              this.RealizandoCadastro = false;
              this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
              this.router.navigate(['empresa/produto']);
            },
            erro => {
              console.log(erro);
              this.RealizandoCadastro = false;
              this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
            }
          );
        },
        erro => {
          console.log(erro);
          this.RealizandoCadastro = false;
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagem);
        }
      );
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
