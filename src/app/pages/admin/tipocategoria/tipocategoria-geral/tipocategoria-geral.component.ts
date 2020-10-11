import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITipoCategoria } from '../../../../shared/models/ITipoCategoria';
import { TipoCategoriaService } from '../../../../core/services/TipoCategoria/TipoCategoria.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-tipocategoria-geral',
  templateUrl: './tipocategoria-geral.component.html',
  styleUrls: ['./tipocategoria-geral.component.scss']
})
export class TipocategoriaGeralComponent implements OnInit {

  public TipoCategorias: ITipoCategoria[];

  constructor(public router: Router,
              private tipoCategoriaService: TipoCategoriaService,
              private snackbar: SnackbarComponent) { }

  ngOnInit(): void {
    this.ReceberCategorias();
  }

  ReceberCategorias(): void {
    this.tipoCategoriaService.GetAllSemCategoria().subscribe((tipoCategorias: ITipoCategoria[]) => {
      this.TipoCategorias = tipoCategorias;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError('Erro no servidor, tente novamente mais tarde !!!');
    });
  }

  Navegar(tipoCategoriaNome, tipoCategoriaId): void {
    this.router.navigate(['/admin/tipocategoria/editar/' + tipoCategoriaId + '/' + tipoCategoriaNome]);
  }
}
