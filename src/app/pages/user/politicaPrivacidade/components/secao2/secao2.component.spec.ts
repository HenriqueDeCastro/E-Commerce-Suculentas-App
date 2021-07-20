/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao2Component } from './secao2.component';

describe('Secao2Component', () => {
  let component: Secao2Component;
  let fixture: ComponentFixture<Secao2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
