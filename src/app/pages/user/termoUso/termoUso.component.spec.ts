/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermoUsoComponent } from './termoUso.component';

describe('TermoUsoComponent', () => {
  let component: TermoUsoComponent;
  let fixture: ComponentFixture<TermoUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermoUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
