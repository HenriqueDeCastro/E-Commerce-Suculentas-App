import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmRelegationComponent } from './dialog-confirm-relegation.component';

describe('DialogConfirmRelegationComponent', () => {
  let component: DialogConfirmRelegationComponent;
  let fixture: ComponentFixture<DialogConfirmRelegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmRelegationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmRelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
