import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwelveComponent } from './section-twelve.component';

describe('SectionTwelveComponent', () => {
  let component: SectionTwelveComponent;
  let fixture: ComponentFixture<SectionTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
