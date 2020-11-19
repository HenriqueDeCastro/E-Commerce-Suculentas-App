/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogFiltroProdutosEmpresaComponent } from './dialog-filtro-produtos-empresa.component';

describe('DialogFiltroProdutosEmpresaComponent', () => {
  let component: DialogFiltroProdutosEmpresaComponent;
  let fixture: ComponentFixture<DialogFiltroProdutosEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFiltroProdutosEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFiltroProdutosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
