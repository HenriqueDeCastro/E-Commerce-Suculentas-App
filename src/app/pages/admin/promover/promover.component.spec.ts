/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromoverComponent } from './promover.component';

describe('PromoverComponent', () => {
  let component: PromoverComponent;
  let fixture: ComponentFixture<PromoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
