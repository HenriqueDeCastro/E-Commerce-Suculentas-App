/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao6Component } from './secao6.component';

describe('Secao6Component', () => {
  let component: Secao6Component;
  let fixture: ComponentFixture<Secao6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
