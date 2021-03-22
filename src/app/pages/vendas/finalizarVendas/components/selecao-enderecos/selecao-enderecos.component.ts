import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-selecao-enderecos',
  templateUrl: './selecao-enderecos.component.html',
  styleUrls: ['./selecao-enderecos.component.scss']
})
export class SelecaoEnderecosComponent implements OnInit {

  @Input() Enderecos: IEndereco[];
  @Input() TipoProduto: number;
  public IdEstoque: number;
  public IdEncomenda: number;
  public EnderecoSelecionado: IEndereco;
  @Output() EnderecoEnviado = new EventEmitter<IEndereco>();

  constructor(private router: Router) { }

  ngOnInit() {
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
  }

  VerificaEnderecoEncomenda(endereco: IEndereco): boolean {
    if(this.TipoProduto == this.IdEncomenda) {
      if(endereco.cidade == "Santo André" || endereco.cidade == "São Bernardo do Campo" || endereco.cidade == "São Caetano do Sul" || endereco.cidade == "Mauá") {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  EnviarEndereco(endereco: IEndereco) {
    this.EnderecoEnviado.emit(endereco);
  }
}
