/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao5Component } from './secao5.component';

describe('Secao5Component', () => {
  let component: Secao5Component;
  let fixture: ComponentFixture<Secao5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
