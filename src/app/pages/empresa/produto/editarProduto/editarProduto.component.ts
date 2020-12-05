import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/Categoria/Categoria.service';
import { ProdutoService } from 'src/app/core/services/Produto/Produto.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { RenomearArquivoComponent } from 'src/app/shared/components/renomear-arquivo/renomear-arquivo.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { IProduto } from 'src/app/shared/models/IProduto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editarProduto',
  templateUrl: './editarProduto.component.html',
  styleUrls: ['./editarProduto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  private ProdutoId: number;
  public Produto: IProduto;
  public ProdutoForm: FormGroup;
  public file: File;
  public RealizandoCadastro = false;
  public selected: number;
  public selectedAtivo: boolean;
  public Categorias: ICategoria[];

  constructor(private activetedRoute: ActivatedRoute,
              private snackbar: SnackbarComponent,
              private produtoService: ProdutoService,
              private fb: FormBuilder,
              private categoriaService: CategoriaService,
              private renomear: RenomearArquivoComponent,
              private location: Location,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.ReceberProdutos();
    this.ReceberCategorias();
  }

  ReceberValorRota(): void {
    this.ProdutoId = this.activetedRoute.snapshot.params.produtoId;
  }

  ReceberProdutos(): void {
    this.produtoService.GetById(this.ProdutoId).subscribe((produto: IProduto) => {
      this.selected = produto.categoriaId;
      this.selectedAtivo = produto.ativo;
      this.Produto = produto;
      this.Validation();
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllSemProduto().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }


  Validation(): void {
    this.ProdutoForm = this.fb.group({
      nome: [{value: this.Produto.nome, disabled: false}, [Validators.required]],
      descricao: [{value: this.Produto.descricao, disabled: false}, [Validators.required]],
      preco: [{value: this.Produto.preco, disabled: false}, [Validators.required]],
      imagem: [{value: this.Produto.imagem, disabled: false}, [Validators.required]],
      categorias: [{value: this.Produto.categoriaId, disabled: false}, [Validators.required]],
      ativo: [{value: this.Produto.ativo, disabled: false}, [Validators.required]],
      estoque: [{value: this.Produto.estoque, disabled: false}, [Validators.required]]
    });
  }

  OnFileChange(event): void {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files;
    }
  }


  Atualizar(): void {
    if (this.ProdutoForm.valid) {
      this.RealizandoCadastro = true;
      if (this.file) {
        this.UpdateFoto();
      } else {
        this.Update();
      }
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }

  UpdateFoto(): void {
    this.file = this.renomear.RenomearArquivo(this.file, this.ProdutoForm.value.nome);
    this.produtoService.postUpload(this.file).subscribe(
      () => {
        this.Update();
      },
      erro => {
        console.log(erro);
        this.RealizandoCadastro = false;
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagem);
      }
    );
  }


  Update(): void {
    let produto: IProduto;
    produto = {
      id: this.Produto.id,
      nome: this.ProdutoForm.value.nome,
      descricao: this.ProdutoForm.value.descricao,
      preco: Number(this.ProdutoForm.value.preco),
      imagem: this.file ? this.file[0].name : this.Produto.imagem,
      estoque: this.ProdutoForm.value.estoque,
      ativo: this.selectedAtivo,
      categoriaId: this.selected
    };
    this.produtoService.Put(produto).subscribe(
      () => {
        this.RealizandoCadastro = false;
        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.AtualizacaoConcluida);
        this.location.back();
      },
      erro => {
        console.log(erro);
        this.RealizandoCadastro = false;
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      }
    );
  }
}
