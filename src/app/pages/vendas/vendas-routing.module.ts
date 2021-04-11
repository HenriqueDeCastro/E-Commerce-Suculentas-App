import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

import { VendasComponent } from './vendas.component';
import { FinalizarVendasComponent } from './finalizarVendas/finalizarVendas.component';
import { ConcluidaComponent } from './concluida/concluida.component';

const routes: Routes = [
  { path: '', component: VendasComponent,
    children:
    [
      { path: 'finalizar/:idTipoProduto', component: FinalizarVendasComponent, canActivate: [AuthGuard] },
      { path: 'concluida/:idVenda', component: ConcluidaComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'produtos', pathMatch: 'full' },
      { path: '**', redirectTo: 'produtos', pathMatch: 'full' }
    ], canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendasRoutingModule { }
