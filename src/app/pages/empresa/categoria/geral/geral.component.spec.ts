/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeralComponent } from './geral.component';

describe('GeralComponent', () => {
  let component: GeralComponent;
  let fixture: ComponentFixture<GeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
