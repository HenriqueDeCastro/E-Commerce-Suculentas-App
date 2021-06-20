import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/core/services/server/Produto/Produto.service';
import { MelhorEnvioService } from 'src/app/core/services/server/MelhorEnvio/MelhorEnvio.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { CryptService } from 'src/app/core/services/shared/Crypt/Crypt.service';
import { IProduto } from 'src/app/shared/models/IProduto';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICalculoFrete } from 'src/app/shared/models/ICalculoFrete';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-produto-unitario',
  templateUrl: './produto-unitario.component.html',
  styleUrls: ['./produto-unitario.component.scss']
})
export class ProdutoUnitarioComponent implements OnInit {

  public produtoId: number;
  public categoriaNome: string;
  public ProdutoCarrinho: IProdutoCarrinho;
  public Carregou: boolean = false;
  public Produto: IProduto;
  public link: string;
  public Quantidade: number;
  public QuantidadeMaxima: number;
  public IdEstoque: number;
  public IdEncomenda: number;
  public FreteForm: FormGroup;
  public ValorFrete: ICalculoFrete;
  public CEPStorage: string;
  public Calculando: boolean = false;
  public TextoBotaoCalculo: string = 'Calcular';

  constructor(private activetedRoute: ActivatedRoute,
              private snackbar: SnackbarService,
              private fb: FormBuilder,
              private produtoService: ProdutoService,
              private melhorEnvioService: MelhorEnvioService,
              private cryptService: CryptService,
              private progressBarService: ProgressBarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.progressBarService.Mostrar(true);
    this.link = environment.UrlApi;
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
    this.Quantidade = 1;
    this.Validation();
    this.VerificaCEPStorage();
    this.ReceberValorRota();
    this.ReceberProduto();
  }

  ReceberValorRota(): void {
    this.produtoId = this.activetedRoute.snapshot.params.produtoId;
    this.categoriaNome = this.activetedRoute.snapshot.params.categoriaName;
  }

  ReceberProduto(): void {
    this.produtoService.GetById(this.produtoId).subscribe((produto: IProduto) => {
      if(produto) {
        this.VerificarProdutoCarrinho(produto);
        this.Produto = produto;
        this.Carregou = true;
      } else {
        this.Carregou = true;
      }
      this.progressBarService.Mostrar(false);
    },
    (erro) => {
      this.progressBarService.Mostrar(false);
      console.error(erro);

      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  ReceberQuantidade(value: number): void {
    this.Quantidade = value;
  }

  Validation(): void {
    this.FreteForm = this.fb.group({
      cep: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  VerificaCEPStorage() {
    const cepCrypt = localStorage.getItem(environment.VariavelCEP);
    if(cepCrypt) {
      const cepDescrypt = this.cryptService.descryptText(cepCrypt);
      this.CEPStorage = cepDescrypt.length <= 1? cepCrypt: cepDescrypt;
      this.melhorEnvioService.CalcularFretePacote(this.CEPStorage).subscribe((result: ICalculoFrete) => {
        this.ValorFrete = result;
      },
      (erro) => {
        console.error(erro);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidorMelhorEnvio);
      });
    }
  }

  CalcularFrete() {
    if (this.FreteForm.valid) {
      this.Calculando = true;
      this.TextoBotaoCalculo = 'Calculando...';
      this.melhorEnvioService.CalcularFretePacote(this.FreteForm.value.cep).subscribe((result: ICalculoFrete) => {
        const cepCrypt = this.cryptService.cryptText(this.FreteForm.value.cep)
        localStorage.setItem(environment.VariavelCEP, cepCrypt);
        this.CEPStorage = this.FreteForm.value.cep;
        this.ValorFrete = result;
        this.TextoBotaoCalculo = 'Calcular';
        this.Calculando = false;
      },
      (erro) => {
        console.error(erro);
        this.TextoBotaoCalculo = 'Calcular';
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidorMelhorEnvio);
        this.Calculando = false;
      });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCampoCEPPreenchido);
    }
  }

  LimparFrete() {
    this.ValorFrete= null;
    this.CEPStorage = null;
    localStorage.removeItem(environment.VariavelCEP);
  }

  VerificarProdutoCarrinho(produto: IProduto) {
    const ProdutosCrypt = localStorage.getItem(environment.VariavelProduto);

    if (ProdutosCrypt)
    {
      const ProdutosCarrinho = this.cryptService.descryptObject(ProdutosCrypt);
      const produtoFiltrado: IProdutoCarrinho[] = ProdutosCarrinho.filter(p => p.id == produto.id);
      this.ProdutoCarrinho = produtoFiltrado[0];

      if(this.ProdutoCarrinho)
      {
        this.QuantidadeMaximaMenosQuantidadeCarrinho(produto, this.ProdutoCarrinho);
      }
      else
      {
        this.QuantidadeMaximaProdutoDisponivel(produto);
      }
    }
    else
    {
      this.QuantidadeMaximaProdutoDisponivel(produto);
    }
  }

  QuantidadeMaximaMenosQuantidadeCarrinho(produto: IProduto, produtoCarrinho: IProdutoCarrinho) {
    if (produto.tipoProdutoId == environment.TipoProdutoEncomenda)
    {
      this.QuantidadeMaxima = produto.quantidadeMaxima - produtoCarrinho.quantidadePedido;
    }
    else
    {
      this.QuantidadeMaxima = produto.estoque - produtoCarrinho.quantidadePedido;
    }
  }

  QuantidadeMaximaProdutoDisponivel(produto: IProduto) {
    if (produto.tipoProdutoId == environment.TipoProdutoEncomenda)
    {
      this.QuantidadeMaxima = produto.quantidadeMaxima;
    }
    else
    {
      this.QuantidadeMaxima = produto.estoque;
    }
  }

}
