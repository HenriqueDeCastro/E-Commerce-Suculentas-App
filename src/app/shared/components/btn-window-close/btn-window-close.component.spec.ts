import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWindowCloseComponent } from './btn-window-close.component';

describe('BtnWindowCloseComponent', () => {
  let component: BtnWindowCloseComponent;
  let fixture: ComponentFixture<BtnWindowCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWindowCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWindowCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
