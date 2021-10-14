import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThirteenComponent } from './section-thirteen.component';

describe('SectionThirteenComponent', () => {
  let component: SectionThirteenComponent;
  let fixture: ComponentFixture<SectionThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
