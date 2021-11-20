import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditCartComponent } from './view-edit-cart.component';

describe('ViewEditCartComponent', () => {
  let component: ViewEditCartComponent;
  let fixture: ComponentFixture<ViewEditCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
