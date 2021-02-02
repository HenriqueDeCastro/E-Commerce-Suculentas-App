/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromoverAddComponent } from './promover-add.component';

describe('PromoverAddComponent', () => {
  let component: PromoverAddComponent;
  let fixture: ComponentFixture<PromoverAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoverAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoverAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
