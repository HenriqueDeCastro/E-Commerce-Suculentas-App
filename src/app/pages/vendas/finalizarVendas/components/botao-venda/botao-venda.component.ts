import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { HorarioService } from 'src/app/core/services/shared/Horario/Horario.service';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { IPedido } from 'src/app/shared/models/IPedido';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { IUser } from 'src/app/shared/models/IUser';
import { IVenda } from 'src/app/shared/models/IVenda';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';

@Component({
  selector: 'app-botao-venda',
  templateUrl: './botao-venda.component.html',
  styleUrls: ['./botao-venda.component.scss']
})
export class BotaoVendaComponent implements OnInit {

  private Venda: IVenda;
  private Pedidos: IPedido[] = [];
  @Input() ValorTotal: number;
  @Input() ValorFrete: number;
  @Input() Produtos: IProdutoCarrinho[];
  @Input() Endereco: IEndereco;

  constructor(private horarioService: HorarioService,
              private vendaService: VendaService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  Pagar() {
    const user: IUser = this.authService.GetUserToken();

    this.Produtos.forEach((produto: IProdutoCarrinho) => {
      const pedido: IPedido = {
        quantidade: produto.quantidadePedido,
        produtoId: produto.id
      }
      this.Pedidos.push(pedido);
    });

    this.Venda = {
      dataVenda: this.horarioService.RetornaDataHoraAtual(),
      valor: this.ValorTotal,
      frete: this.ValorFrete? true : false,
      valorFrete: this.ValorFrete? this.ValorFrete: null,
      userId: user.id,
      enderecoId: this.Endereco.id,
      pedidos: this.Pedidos
    }

    console.log(this.Venda)

    this.vendaService.Post(this.Venda).subscribe((venda: IVenda) => {
      //this.Registrando = false;
      this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.CadastroConcluido);
    },
    erro => {
      console.log(erro);
      //this.Registrando = false;
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }
}
