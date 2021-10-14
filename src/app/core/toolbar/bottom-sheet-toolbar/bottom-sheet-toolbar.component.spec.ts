import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetToolbarComponent } from './bottom-sheet-toolbar.component';

describe('BottomSheetToolbarComponent', () => {
  let component: BottomSheetToolbarComponent;
  let fixture: ComponentFixture<BottomSheetToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
