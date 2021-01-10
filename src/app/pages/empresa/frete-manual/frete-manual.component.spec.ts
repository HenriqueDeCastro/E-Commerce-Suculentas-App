/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreteManualComponent } from './frete-manual.component';

describe('FreteManualComponent', () => {
  let component: FreteManualComponent;
  let fixture: ComponentFixture<FreteManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreteManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreteManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
