/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VendaDetalheEditarVendaComponent } from './venda-detalhe-editar-venda.component';

describe('VendaDetalheEditarVendaComponent', () => {
  let component: VendaDetalheEditarVendaComponent;
  let fixture: ComponentFixture<VendaDetalheEditarVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaDetalheEditarVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaDetalheEditarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
