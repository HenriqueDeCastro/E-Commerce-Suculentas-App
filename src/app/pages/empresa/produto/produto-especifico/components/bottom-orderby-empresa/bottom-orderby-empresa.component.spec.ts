/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BottomOrderbyEmpresaComponent } from './bottom-orderby-empresa.component';

describe('BottomOrderbyEmpresaComponent', () => {
  let component: BottomOrderbyEmpresaComponent;
  let fixture: ComponentFixture<BottomOrderbyEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomOrderbyEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomOrderbyEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
