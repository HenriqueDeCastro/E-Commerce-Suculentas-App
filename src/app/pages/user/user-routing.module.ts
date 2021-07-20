import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EsqueciSenhaComponent } from './esqueciSenha/esqueciSenha.component';
import { ResetSenhaComponent } from './resetSenha/resetSenha.component';
import { NotAcessComponent } from './notAcess/notAcess.component';
import { PoliticaPrivacidadeComponent } from './politicaPrivacidade/politicaPrivacidade.component';
import { TermoUsoComponent } from './termoUso/termoUso.component';

const routes: Routes = [
  { path: '', component: UserComponent,
    children:
    [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'esquecisenha', component: EsqueciSenhaComponent },
      { path: 'sem-acesso', component: NotAcessComponent },
      { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
      { path: 'termos-de-uso', component: TermoUsoComponent },
      { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilModule', canActivate: [AuthGuard] },
      { path: 'reset/:email/:token', component: ResetSenhaComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
