/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogOrderbyComponent } from './dialog-orderby.component';

describe('DialogOrderbyComponent', () => {
  let component: DialogOrderbyComponent;
  let fixture: ComponentFixture<DialogOrderbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOrderbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOrderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
