import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-botoes-carrinho',
  templateUrl: './botoes-carrinho.component.html',
  styleUrls: ['./botoes-carrinho.component.scss']
})
export class BotoesCarrinhoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  LimparCarrinho(): void {
    localStorage.removeItem(environment.VariavelProduto);
    localStorage.removeItem(environment.VariavelQuantidade);
    this.router.navigate(['/produtos']);
  }
}
