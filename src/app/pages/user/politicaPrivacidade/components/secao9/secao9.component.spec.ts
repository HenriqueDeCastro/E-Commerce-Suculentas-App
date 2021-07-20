/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao9Component } from './secao9.component';

describe('Secao9Component', () => {
  let component: Secao9Component;
  let fixture: ComponentFixture<Secao9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
