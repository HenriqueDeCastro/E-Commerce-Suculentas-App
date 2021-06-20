import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { IRole } from 'src/app/shared/models/IRole';
import { RoleService } from 'src/app/core//services/server/Role/Role.service';
import { Router } from '@angular/router';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-gerenciar-rules-add',
  templateUrl: './gerenciar-rules-add.component.html',
  styleUrls: ['./gerenciar-rules-add.component.scss']
})
export class GerenciarRulesAddComponent implements OnInit {

  public RoleForm: FormGroup;
  public Registrando = false;
  private Rule: IRole;
  public roleSelect: string = null;

  constructor(private fb: FormBuilder,
              private snackbar: SnackbarService,
              public router: Router,
              private mensagemSnackbar: MensagensService,
              private progressBarService: ProgressBarService,
              private roleService: RoleService) { }

  ngOnInit(): void {
    this.Validation();
  }

  Validation(): void {
    this.RoleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  Registrar() {
    if (this.RoleForm.valid) {
      this.Registrando = true;
      this.progressBarService.Mostrar(true);

      this.Rule = {
        name: this.RoleForm.value.name
      }
      this.roleService.Post(this.Rule).subscribe(() => {
        this.Registrando = false;
        this.progressBarService.Mostrar(false);

        this.router.navigate(['/admin/gerenciarrules/geral']);
      },
      error => {
        this.Registrando = false;
        this.progressBarService.Mostrar(false);

        const erro = error.error;
        console.error(error);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
      })
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCamposPreenchidos);
    }
  }
}
