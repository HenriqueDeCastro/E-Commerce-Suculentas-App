import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'empresa', loadChildren: './empresa/empresa.module#EmpresaModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: '**', redirectTo: 'produtos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
