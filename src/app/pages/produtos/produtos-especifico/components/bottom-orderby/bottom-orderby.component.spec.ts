/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BottomOrderbyComponent } from './bottom-orderby.component';

describe('BottomOrderbyComponent', () => {
  let component: BottomOrderbyComponent;
  let fixture: ComponentFixture<BottomOrderbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomOrderbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomOrderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
