/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertCamposObrigatoriosComponent } from './alert-campos-obrigatorios.component';

describe('AlertCamposObrigatoriosComponent', () => {
  let component: AlertCamposObrigatoriosComponent;
  let fixture: ComponentFixture<AlertCamposObrigatoriosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCamposObrigatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCamposObrigatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
