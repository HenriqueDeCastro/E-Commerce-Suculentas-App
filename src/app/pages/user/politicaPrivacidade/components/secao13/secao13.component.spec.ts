/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao13Component } from './secao13.component';

describe('Secao13Component', () => {
  let component: Secao13Component;
  let fixture: ComponentFixture<Secao13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
