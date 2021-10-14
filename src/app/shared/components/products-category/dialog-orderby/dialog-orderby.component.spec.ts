import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrderbyComponent } from './dialog-orderby.component';

describe('DialogOrderbyComponent', () => {
  let component: DialogOrderbyComponent;
  let fixture: ComponentFixture<DialogOrderbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOrderbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOrderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
