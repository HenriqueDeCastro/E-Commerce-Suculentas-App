import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../core/guards/auth.guard';

import { EnderecoComponent } from '../endereco/endereco.component';
import { EnderecoAddComponent } from '../endereco/endereco-add/endereco-add.component';
import { EnderecoEditComponent } from '../endereco/endereco-edit/endereco-edit.component';
import { EnderecoGeralComponent } from '../endereco/endereco-geral/endereco-geral.component';

const routes: Routes = [
  { path: '', component: EnderecoComponent,
    children:
    [
      { path: 'geral', component: EnderecoGeralComponent, canActivate: [AuthGuard]  },
      { path: 'add', component: EnderecoAddComponent, canActivate: [AuthGuard]  },
      { path: 'edit/:enderecoId', component: EnderecoEditComponent, canActivate: [AuthGuard]  },
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

export class EnderecoRoutingModule { }
