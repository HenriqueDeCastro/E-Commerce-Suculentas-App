/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Secao11Component } from './secao11.component';

describe('Secao11Component', () => {
  let component: Secao11Component;
  let fixture: ComponentFixture<Secao11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secao11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secao11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
