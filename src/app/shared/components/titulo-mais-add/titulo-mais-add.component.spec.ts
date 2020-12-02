/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TituloMaisAddComponent } from './titulo-mais-add.component';

describe('TituloMaisAddComponent', () => {
  let component: TituloMaisAddComponent;
  let fixture: ComponentFixture<TituloMaisAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloMaisAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloMaisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
