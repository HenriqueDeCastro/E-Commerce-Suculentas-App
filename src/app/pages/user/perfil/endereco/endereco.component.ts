import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/core/services/Endereco/Endereco.service';
import { MensagemSnackbarComponent } from 'src/app/shared/components/mensagem-snackbar/mensagem-snackbar.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  public User: IUser;
  public Endereco: IEndereco[];

  constructor(public router: Router,
              private enderecoService: EnderecoService,
              private snackbar: SnackbarComponent,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit() {
    this.ReceberUserLogado();
    this.ReceberEnderecoUser();
  }

  ReceberUserLogado(): void{
    this.User = JSON.parse(localStorage.getItem(environment.VariavelUsuario));
  }

  ReceberEnderecoUser() {
    this.enderecoService.GetByUserId(this.User.id).subscribe((enderecos: IEndereco[]) => {
      this.Endereco = enderecos;
      console.log(this.Endereco)
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }
}
