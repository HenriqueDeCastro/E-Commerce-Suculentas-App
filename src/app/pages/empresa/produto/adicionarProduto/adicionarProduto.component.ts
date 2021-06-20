import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/core/services/server/Categoria/Categoria.service';
import { TipoProdutoService } from 'src/app/core/services/server/TipoProduto/TipoProduto.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { ICategoria } from 'src/app/shared/models/ICategoria';
import { IProduto } from 'src/app/shared/models/IProduto';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';
import { environment } from 'src/environments/environment';
import { ProdutoService } from '../../../../core/services/server/Produto/Produto.service';
import { RenomearArquivoService } from 'src/app/core/services/shared/RenomearArquivo/RenomearArquivo.service';
import { ImageCompressService } from 'src/app/core/services/shared/ImageCompress/ImageCompress.service';
import { HorarioService } from 'src/app/core/services/shared/Horario/Horario.service';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-adicionarProduto',
  templateUrl: './adicionarProduto.component.html',
  styleUrls: ['./adicionarProduto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {

  public file: File;
  public fileMini: File;
  public IdentificacaoForm: FormGroup;
  public InformacoesForm: FormGroup;
  public ValoresForm: FormGroup;
  public RealizandoCadastro = false;
  public selectedCategoria: number;
  public selectedTipo: number;
  public TiposProdutos: ITipoProduto[];
  public Categorias: ICategoria[];
  public IdEstoque: number;
  public IdEncomenda: number;
  public TextoBotao = 'Finalizar';

  constructor(private fb: FormBuilder,
              public router: Router,
              private produtoService: ProdutoService,
              private categoriaService: CategoriaService,
              private tipoProdutoService: TipoProdutoService,
              private renomear: RenomearArquivoService,
              private horario: HorarioService,
              private snackbar: SnackbarService,
              private imageCompressService: ImageCompressService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.progressBarService.Mostrar(true);
    this.ReceberCategorias();
    this.ReceberTiposCategorias();
    this.ValidationIndetificacao();
    this.ValidationInformacoes();
    this.ValidationValores();
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
  }

  ValidationIndetificacao(): void {
    this.IdentificacaoForm = this.fb.group({
      imagem: ['', [Validators.required]],
      categorias: [null, [Validators.required]],
      tiposprodutos: [null, [Validators.required]]
    });
  }

  ValidationInformacoes(): void {
    this.InformacoesForm = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
  }

  ValidationValores(): void {
    this.ValoresForm = this.fb.group({
      preco: ['', [Validators.required]],
      estoque: [{value:'', disabled: this.selectedTipo == this.IdEncomenda}, [Validators.required]],
      quantidadeMaxima: [{value:'', disabled: this.selectedTipo == this.IdEstoque}, [Validators.required]]
    });
  }

  ReceberCategorias(): void {
    this.categoriaService.GetAllSemProduto().subscribe((categorias: ICategoria[]) => {
      this.Categorias = categorias;
    },
    erro => {
      console.error(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagem);
    });
  }

  ReceberTiposCategorias() {
    this.tipoProdutoService.GetAllSemProduto().subscribe((tipoProdutos: ITipoProduto[]) => {
      this.TiposProdutos = tipoProdutos
      this.progressBarService.Mostrar(false);
    },
    erro => {
      console.error(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagem);
    })
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
        const file = await this.imageCompressService.compressFile50(event.target.result, fileName);
        const fileMini = await this.imageCompressService.compressFile20(event.target.result, fileName);
        this.file = file;
        this.fileMini = fileMini;
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  UploadFotos(): void {
    const data = this.horario.RetornaDataAtualParaNome();
    const nomeArquivo = `${this.InformacoesForm.value.nome}_${data}`;
    const nomeArquivoMini = `Mini_${this.InformacoesForm.value.nome}_${data}`;
    this.file = this.renomear.RenomearArquivo(this.file, nomeArquivo);
    this.fileMini = this.renomear.RenomearArquivo(this.fileMini, nomeArquivoMini);

    this.produtoService.postUpload(this.file).subscribe(
      () => {
        this.produtoService.postUpload(this.fileMini).subscribe(
          () => {
            this.PostProduto();
          },
          erro => {
            console.error(erro);
            this.RealizandoCadastro = false;
            this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagemMini);
          }
        );
      },
      erro => {
        console.error(erro);
        this.RealizandoCadastro = false;
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroUploadImagem);
      }
    );
  }

  PostProduto(): void {
    let produto: IProduto;
    produto = {
      nome: this.InformacoesForm.value.nome,
      descricao: this.InformacoesForm.value.descricao,
      preco: Number(this.ValoresForm.value.preco),
      imagem: this.file.name,
      tipoProdutoId: this.selectedTipo,
      estoque: this.selectedTipo == this.IdEstoque? this.ValoresForm.value.estoque : null,
      quantidadeMaxima: this.selectedTipo == this.IdEncomenda? this.ValoresForm.value.quantidadeMaxima : null,
      ativo: true,
      categoriaId: this.selectedCategoria
    };
    this.produtoService.Post(produto).subscribe(
      () => {
        this.progressBarService.Mostrar(false);

        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
        this.router.navigate(['empresa/produto']);
      },
      erro => {
        this.progressBarService.Mostrar(false);
        this.RealizandoCadastro = false;
        this.TextoBotao = 'Finalizar';

        console.error(erro);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      }
    );
  }

  Registrar(): void {
      if (this.IdentificacaoForm.valid && this.InformacoesForm.valid && this.ValoresForm.valid) {
      this.RealizandoCadastro = true;
      this.TextoBotao = 'Finalizando';
      this.progressBarService.Mostrar(true);

      this.UploadFotos();
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
