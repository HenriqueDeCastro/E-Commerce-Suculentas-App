import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { PerfilComponent } from '../perfil/perfil.component';
import { DadosPerfilComponent } from '../perfil/dados-perfil/dados-perfil.component';
import { DadosPessoaisComponent } from '../perfil/dados-pessoais/dados-pessoais.component';
import { DadosPessoaisEditComponent } from '../perfil/dados-pessoais-edit/dados-pessoais-edit.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecoAddComponent } from './endereco-add/endereco-add.component';

const routes: Routes = [
  { path: '', component: PerfilComponent,
    children:
    [
      { path: 'geral', component: DadosPerfilComponent, canActivate: [AuthGuard]  },
      { path: 'dados', component: DadosPessoaisComponent, canActivate: [AuthGuard]  },
      { path: 'dados/edit', component: DadosPessoaisEditComponent, canActivate: [AuthGuard]  },
      { path: 'endereco', component: EnderecoComponent, canActivate: [AuthGuard]  },
      { path: 'endereco/add', component: EnderecoAddComponent, canActivate: [AuthGuard]  },
      // { path: 'reset/:email/:token', component: ResetSenhaComponent },
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
