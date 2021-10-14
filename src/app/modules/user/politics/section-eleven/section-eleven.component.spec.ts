import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionElevenComponent } from './section-eleven.component';

describe('SectionElevenComponent', () => {
  let component: SectionElevenComponent;
  let fixture: ComponentFixture<SectionElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
