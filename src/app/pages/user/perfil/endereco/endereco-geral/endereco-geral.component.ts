import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnderecoService } from 'src/app/core/services/server/Endereco/Endereco.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';
import { DialogEnderecoDeleteComponent } from './components/dialog-endereco-delete/dialog-endereco-delete.component';
import { BottomEnderecoDeleteComponent } from './components/bottom-endereco-delete/bottom-endereco-delete.component';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';

@Component({
  selector: 'app-endereco-geral',
  templateUrl: './endereco-geral.component.html',
  styleUrls: ['./endereco-geral.component.scss']
})
export class EnderecoGeralComponent implements OnInit {

  public User: IUser;
  public Enderecos: IEndereco[];

  constructor(public router: Router,
              public dialog: MatDialog,
              private enderecoService: EnderecoService,
              private authService: AuthService,
              private snackbar: SnackbarService,
              private bottomSheet: MatBottomSheet,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
    this.ReceberUserLogado();
    this.ReceberEnderecoUser();
  }

  ReceberUserLogado(): void{
    this.User = this.authService.GetUserToken();
  }

  ReceberEnderecoUser() {
    this.enderecoService.GetByUserId(this.User.id).subscribe((enderecos: IEndereco[]) => {
      this.Enderecos = enderecos;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  TituloCard(endereco: IEndereco): string {
    if (endereco.descricao) {
      return endereco.descricao;
    } else {
      return `${endereco.rua}, ${endereco.numero}`;
    }
  }

  OpenDialog(endereco: IEndereco): void {
    const dialogRef = this.dialog.open(DialogEnderecoDeleteComponent, {
      data: {
        endereco: endereco
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ResultDelete(result);
    });
  }

  openBottomSheet(endereco: IEndereco): void {
    const bottomSheetRef = this.bottomSheet.open(BottomEnderecoDeleteComponent, {
      data: {
        endereco: endereco
      }
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.ResultDelete(result);
    });
  }

  Editar(idEndereco: number): void {
    this.router.navigate(['/user/perfil/endereco/edit/' + idEndereco]);
  }

  ResultDelete(result: boolean) {
    if(result) {
      this.Enderecos = null;
      this.ReceberEnderecoUser()
    }
  }
}
