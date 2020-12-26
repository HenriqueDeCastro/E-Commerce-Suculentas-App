/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromoverGeralComponent } from './promover-geral.component';

describe('PromoverGeralComponent', () => {
  let component: PromoverGeralComponent;
  let fixture: ComponentFixture<PromoverGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoverGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoverGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
