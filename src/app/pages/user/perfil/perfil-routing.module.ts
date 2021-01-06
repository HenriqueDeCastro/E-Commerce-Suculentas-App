import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { PerfilComponent } from '../perfil/perfil.component';
import { PerfilGeralComponent } from '../perfil/perfil-geral/perfil-geral.component';

const routes: Routes = [
  { path: '', component: PerfilComponent,
    children:
    [
      { path: 'geral', component: PerfilGeralComponent, canActivate: [AuthGuard]  },
      { path: 'dados', loadChildren: './dados-pessoais/dados-pessoais.module#DadosPessoaisModule', canActivate: [AuthGuard] },
      { path: 'endereco', loadChildren: './endereco/endereco.module#EnderecoModule', canActivate: [AuthGuard] },
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

export class PerfilRoutingModule { }
