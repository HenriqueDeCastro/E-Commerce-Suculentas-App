import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnderecoService } from 'src/app/core/services/server/Endereco/Endereco.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { IEndereco } from 'src/app/shared/models/IEndereco';

@Component({
  selector: 'app-list-endereco-delete',
  templateUrl: './list-endereco-delete.component.html',
  styleUrls: ['./list-endereco-delete.component.scss']
})
export class ListEnderecoDeleteComponent implements OnInit {

  @Input() Endereco: IEndereco;
  @Output() Acao = new EventEmitter<boolean>();
  public Apagando: boolean = false;

  constructor(private enderecoService: EnderecoService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
  }

  Cancelar() {
    this.Acao.emit(false);
  }

  Deletar() {
    this.Apagando = true
    this.enderecoService.Delete(this.Endereco.id).subscribe((result: any) => {
      this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.DeletarConcluido);
      this.Apagando = false;
      this.Acao.emit(true);
    },
    erro => {
      console.log(erro);
      this.Apagando = false;
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }
}
