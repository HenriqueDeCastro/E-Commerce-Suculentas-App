/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RotasSiteComponent } from './Rotas-Site.component';

describe('RotasSiteComponent', () => {
  let component: RotasSiteComponent;
  let fixture: ComponentFixture<RotasSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotasSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
