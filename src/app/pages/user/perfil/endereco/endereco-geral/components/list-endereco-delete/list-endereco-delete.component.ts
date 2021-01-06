import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnderecoService } from 'src/app/core/services/Endereco/Endereco.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
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
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

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
