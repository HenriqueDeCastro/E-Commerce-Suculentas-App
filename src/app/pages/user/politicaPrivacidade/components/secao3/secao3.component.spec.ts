/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao3Component } from './secao3.component';

describe('Secao3Component', () => {
  let component: Secao3Component;
  let fixture: ComponentFixture<Secao3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
