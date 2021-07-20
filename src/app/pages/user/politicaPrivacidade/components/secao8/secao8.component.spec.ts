/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao8Component } from './secao8.component';

describe('Secao8Component', () => {
  let component: Secao8Component;
  let fixture: ComponentFixture<Secao8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
