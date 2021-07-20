/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao7Component } from './secao7.component';

describe('Secao7Component', () => {
  let component: Secao7Component;
  let fixture: ComponentFixture<Secao7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
