import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomEditCartComponent } from './bottom-edit-cart.component';

describe('BottomEditCartComponent', () => {
  let component: BottomEditCartComponent;
  let fixture: ComponentFixture<BottomEditCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomEditCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomEditCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
