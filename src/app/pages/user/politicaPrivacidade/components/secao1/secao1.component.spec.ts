/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao1Component } from './secao1.component';

describe('Secao1Component', () => {
  let component: Secao1Component;
  let fixture: ComponentFixture<Secao1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
