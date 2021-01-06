import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../core/guards/auth.guard';

import { DadosPessoaisComponent } from '../dados-pessoais/dados-pessoais.component';
import { DadosPessoaisEditComponent } from '../dados-pessoais/dados-pessoais-edit/dados-pessoais-edit.component';
import { DadosPessoaisGeralComponent } from '../dados-pessoais/dados-pessoais-geral/dados-pessoais-geral.component';

const routes: Routes = [
  { path: '', component: DadosPessoaisComponent,
    children:
    [
      { path: 'geral', component: DadosPessoaisGeralComponent, canActivate: [AuthGuard]  },
      { path: 'edit', component: DadosPessoaisEditComponent, canActivate: [AuthGuard]  },
      { path: '', redirectTo: 'geral', pathMatch: 'full' },
      { path: '**', redirectTo: 'geral', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DadosPessoaisRoutingModule { }
