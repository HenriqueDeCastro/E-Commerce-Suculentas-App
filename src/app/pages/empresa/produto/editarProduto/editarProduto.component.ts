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
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';
import { environment } from 'src/environments/environment';
import { TipoProdutoService } from 'src/app/core/services/TipoProduto/TipoProduto.service';

@Component({
  selector: 'app-editarProduto',
  templateUrl: './editarProduto.component.html',
  styleUrls: ['./editarProduto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  private ProdutoId: number;
  public Produto: IProduto;
  public IdentificacaoForm: FormGroup;
  public InformacoesForm: FormGroup;
  public ValoresForm: FormGroup;
  public file: File;
  public TiposProdutos: ITipoProduto[];
  public RealizandoCadastro = false;
  public selectedCategoria: number;
  public selectedTipo: number;
  public selectedAtivo: any;
  public Categorias: ICategoria[];
  public IdEncomenda: number;
  public IdEstoque: number;

  constructor(private activetedRoute: ActivatedRoute,
              private snackbar: SnackbarComponent,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private tipoProdutoService: TipoProdutoService,
              private fb: FormBuilder,
              private renomear: RenomearArquivoComponent,
              private location: Location,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberValorRota();
    this.ReceberProdutos();
    this.ReceberCategorias();
    this.ReceberTiposCategorias();
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
  }

  ReceberValorRota(): void {
    this.ProdutoId = this.activetedRoute.snapshot.params.produtoId;
  }

  ReceberProdutos(): void {
    this.produtoService.GetById(this.ProdutoId).subscribe((produto: IProduto) => {
      this.Produto = produto;
      this.selectedCategoria = produto.categoriaId;
      this.selectedTipo = produto.tipoProdutoId;
      this.selectedAtivo = String(this.Produto.ativo);
      this.ValidationIndetificacao();
      this.ValidationInformacoes();
      this.ValidationValores();    },
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

  ReceberTiposCategorias() {
    this.tipoProdutoService.GetAllSemProduto().subscribe((tipoProdutos: ITipoProduto[]) => {
      this.TiposProdutos = tipoProdutos
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagem);
    })
  }


  ValidationIndetificacao(): void {
    this.IdentificacaoForm = this.fb.group({
      imagem: [''],
      categorias: [this.selectedCategoria, [Validators.required]],
      tiposprodutos: [this.selectedTipo, [Validators.required]]
    });
  }

  ValidationInformacoes(): void {
    this.InformacoesForm = this.fb.group({
      nome: [this.Produto.nome, [Validators.required]],
      descricao: [this.Produto.descricao, [Validators.required]],
    });
  }

  ValidationValores(): void {
    this.ValoresForm = this.fb.group({
      preco: [this.Produto.preco, [Validators.required]],
      estoque: [{value:this.Produto.estoque, disabled: this.selectedTipo == this.IdEncomenda}, [Validators.required]],
      quantidadeMaxima: [{value:this.Produto.quantidadeMaxima, disabled: this.selectedTipo == this.IdEstoque}, [Validators.required]]
    });
  }

  SelecaoTipo(valor: number) {
    this.selectedTipo = valor;
    this.ValidationValores();
  }

  OnFileChange(event): void {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files;
    }
  }


  Atualizar(): void {
    if (this.IdentificacaoForm.valid && this.InformacoesForm.valid && this.ValoresForm.valid) {
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
    this.file = this.renomear.RenomearArquivo(this.file, this.InformacoesForm.value.nome);
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
      nome: this.InformacoesForm.value.nome,
      descricao: this.InformacoesForm.value.descricao,
      preco: Number(this.ValoresForm.value.preco),
      imagem: this.file? this.file[0].name : this.Produto.imagem,
      tipoProdutoId: this.selectedTipo,
      estoque: this.selectedTipo == this.IdEstoque? this.ValoresForm.value.estoque : null,
      quantidadeMaxima: this.selectedTipo == this.IdEncomenda? this.ValoresForm.value.quantidadeMaxima : null,
      ativo: this.selectedAtivo,
      categoriaId: this.selectedCategoria
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
