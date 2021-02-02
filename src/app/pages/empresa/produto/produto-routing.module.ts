import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { ProdutoComponent } from './produto.component';
import { GeralProdutosComponent } from './geralProdutos/geralProdutos.component';
import { AdicionarProdutoComponent } from './adicionarProduto/adicionarProduto.component';
import { ProdutoEspecificoComponent } from './produto-especifico/produto-especifico.component';
import { EditarProdutoComponent } from './editarProduto/editarProduto.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: ProdutoComponent,
    children:
    [
      { path: 'geral', component: GeralProdutosComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'adicionar', component: AdicionarProdutoComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: ':categoriaId/:categoriaName', component: ProdutoEspecificoComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'editar/:produtoId/:produtoName', component: EditarProdutoComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: '', redirectTo: 'geral', pathMatch: 'full' },
      { path: '**', redirectTo: 'geral', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard], data: { role: environment.RoleEmpresa }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutoRoutingModule { }
