import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleButtonAddComponent } from './title-button-add.component';

describe('TitleButtonAddComponent', () => {
  let component: TitleButtonAddComponent;
  let fixture: ComponentFixture<TitleButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleButtonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
