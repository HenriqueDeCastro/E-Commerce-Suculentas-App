import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { ProdutoService } from 'src/app/core/services/server/Produto/Produto.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { RenomearArquivoService } from 'src/app/core/services/shared/RenomearArquivo/RenomearArquivo.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { IProduto } from 'src/app/shared/models/IProduto';
import { Location } from '@angular/common';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';
import { environment } from 'src/environments/environment';
import { TipoProdutoService } from 'src/app/core/services/server/TipoProduto/TipoProduto.service';
import { ImageCompressService } from 'src/app/core/services/shared/ImageCompress/ImageCompress.service';
import { HorarioService } from 'src/app/core/services/shared/Horario/Horario.service';

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
  public fileMini: File;
  public TiposProdutos: ITipoProduto[];
  public RealizandoCadastro = false;
  public selectedCategoria: number;
  public selectedTipo: number;
  public selectedAtivo: any;
  public Categorias: ICategoria[];
  public IdEncomenda: number;
  public IdEstoque: number;
  public NomeArquivo: string;

  constructor(private activetedRoute: ActivatedRoute,
              private snackbar: SnackbarService,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private tipoProdutoService: TipoProdutoService,
              private fb: FormBuilder,
              private renomear: RenomearArquivoService,
              private location: Location,
              private horario: HorarioService,
              private imageCompressService: ImageCompressService,
              private mensagemSnackbar: MensagensService) { }

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

  OnFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      const fileName = this.file['name'];
      var reader = new FileReader();
      reader.onload = async (event: any) => {
        const file = await this.imageCompressService.compressFile75(event.target.result, fileName);
        const fileMini = await this.imageCompressService.compressFile25(event.target.result, fileName);
        this.file = file;
        this.fileMini = fileMini;
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  Atualizar(): void {
    if (this.IdentificacaoForm.valid && this.InformacoesForm.valid && this.ValoresForm.valid) {
      this.RealizandoCadastro = true;
      if (this.file) {
        this.UploadFotos();
      } else {
        this.UpdateProduto();
      }
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }


  UploadFotos(): void {
    const data = this.horario.RetornaDataAtualParaNome();
    this.NomeArquivo = `${this.InformacoesForm.value.nome}_${data}`;
    const nomeArquivoMini = `Mini_${this.NomeArquivo}`;
    this.file = this.renomear.RenomearArquivo(this.file, this.NomeArquivo);
    this.fileMini = this.renomear.RenomearArquivo(this.fileMini, nomeArquivoMini);

    this.produtoService.postUpload(this.file).subscribe(
      () => {
        this.produtoService.postUpload(this.fileMini).subscribe(
          () => {
            this.UpdateProduto();
          },
          erro => {
            console.log(erro);
            this.RealizandoCadastro = false;
            this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagemMini);
          }
        );
      },
      erro => {
        console.log(erro);
        this.RealizandoCadastro = false;
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagem);
      }
    );
  }


  UpdateProduto(): void {
    let produto: IProduto;
    produto = {
      id: this.Produto.id,
      nome: this.InformacoesForm.value.nome,
      descricao: this.InformacoesForm.value.descricao,
      preco: Number(this.ValoresForm.value.preco),
      imagem: this.file? this.file['name'] : this.Produto.imagem,
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
