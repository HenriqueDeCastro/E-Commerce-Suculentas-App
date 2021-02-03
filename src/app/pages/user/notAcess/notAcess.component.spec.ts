/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotAcessComponent } from './notAcess.component';

describe('NotAcessComponent', () => {
  let component: NotAcessComponent;
  let fixture: ComponentFixture<NotAcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
