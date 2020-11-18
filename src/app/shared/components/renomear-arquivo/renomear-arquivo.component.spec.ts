/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenomearArquivoComponent } from './renomear-arquivo.component';

describe('RenomearArquivoComponent', () => {
  let component: RenomearArquivoComponent;
  let fixture: ComponentFixture<RenomearArquivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenomearArquivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenomearArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
