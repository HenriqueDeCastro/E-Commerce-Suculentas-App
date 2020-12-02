/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaCategoriaVaziaComponent } from './lista-categoria-vazia.component';

describe('ListaCategoriaVaziaComponent', () => {
  let component: ListaCategoriaVaziaComponent;
  let fixture: ComponentFixture<ListaCategoriaVaziaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCategoriaVaziaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaVaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
