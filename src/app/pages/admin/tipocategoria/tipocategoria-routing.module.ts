import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { TipocategoriaGeralComponent } from './tipocategoria-geral/tipocategoria-geral.component';
import { TipocategoriaComponent } from './tipocategoria.component';
import { TipocategoriaAddComponent } from './tipocategoria-add/tipocategoria-add.component';
import { TipocategoriaEditComponent } from './tipocategoria-edit/tipocategoria-edit.component';

const routes: Routes = [
  { path: '', component: TipocategoriaComponent,
    children:
    [
      { path: 'geral', component: TipocategoriaGeralComponent, canActivate: [AuthGuard] },
      { path: 'adicionar', component: TipocategoriaAddComponent, canActivate: [AuthGuard] },
      { path: 'editar/:tipoCategoriaId/:tipoCategoriaName', component: TipocategoriaEditComponent, canActivate: [AuthGuard] },
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

export class TipoCategoriaRoutingModule { }
