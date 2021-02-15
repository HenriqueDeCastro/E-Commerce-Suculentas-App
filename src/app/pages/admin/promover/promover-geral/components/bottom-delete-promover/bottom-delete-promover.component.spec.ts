/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BottomDeletePromoverComponent } from './bottom-delete-promover.component';

describe('BottomDeletePromoverComponent', () => {
  let component: BottomDeletePromoverComponent;
  let fixture: ComponentFixture<BottomDeletePromoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomDeletePromoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomDeletePromoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
