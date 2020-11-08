import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EsqueciSenhaComponent } from './esqueciSenha/esqueciSenha.component';
import { ResetSenhaComponent } from './resetSenha/resetSenha.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', component: UserComponent,
    children:
    [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'esquecisenha', component: EsqueciSenhaComponent },
      { path: 'reset/:email/:token', component: ResetSenhaComponent },
      { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]  },
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
