import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../shared/components/material/material.module';
import { FileInputModule } from '../shared/components/file input/file-input.module';
import { MaskModule } from '../shared/components/mask/mask.module';
import { ComponentModule } from '../shared/components/component.module';
import { EmpresaModule } from './empresa/empresa.module';
import { UserModule } from './user/user.module';
import { ProdutosModule } from './produtos/produtos.module';
import { SobreModule } from './sobre/sobre.module';
import { AdminModule } from './admin/admin.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/guards/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FileInputModule,
    MaskModule,
    ComponentModule,
    EmpresaModule,
    UserModule,
    ProdutosModule,
    SobreModule,
    AdminModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
