/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao12Component } from './secao12.component';

describe('Secao12Component', () => {
  let component: Secao12Component;
  let fixture: ComponentFixture<Secao12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
