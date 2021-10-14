import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRouterBackComponent } from './btn-router-back.component';

describe('BtnRouterBackComponent', () => {
  let component: BtnRouterBackComponent;
  let fixture: ComponentFixture<BtnRouterBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnRouterBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRouterBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
