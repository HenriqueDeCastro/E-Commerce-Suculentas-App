import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosModule' },
  { path: 'empresa', loadChildren: './empresa/empresa.module#EmpresaModule', canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobreModule' },
  { path: '', redirectTo: 'produtos/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'produtos/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
