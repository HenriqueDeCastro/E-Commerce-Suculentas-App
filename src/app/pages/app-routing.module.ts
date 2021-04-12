import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosModule' },
  { path: 'empresa', loadChildren: './empresa/empresa.module#EmpresaModule', canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
  { path: 'vendas', loadChildren: './vendas/vendas.module#VendasModule', canActivate: [AuthGuard] },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobreModule' },
  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoModule' },
  { path: '', redirectTo: 'produtos/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'produtos/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
