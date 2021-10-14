import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomOrderbyComponent } from './bottom-orderby.component';

describe('BottomOrderbyComponent', () => {
  let component: BottomOrderbyComponent;
  let fixture: ComponentFixture<BottomOrderbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomOrderbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomOrderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
