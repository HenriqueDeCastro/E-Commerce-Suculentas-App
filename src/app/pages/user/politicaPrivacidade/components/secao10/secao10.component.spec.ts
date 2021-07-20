/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao10Component } from './secao10.component';

describe('Secao10Component', () => {
  let component: Secao10Component;
  let fixture: ComponentFixture<Secao10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
