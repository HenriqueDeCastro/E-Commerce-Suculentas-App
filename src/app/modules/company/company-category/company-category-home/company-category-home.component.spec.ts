import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCategoryHomeComponent } from './company-category-home.component';

describe('CompanyCategoryHomeComponent', () => {
  let component: CompanyCategoryHomeComponent;
  let fixture: ComponentFixture<CompanyCategoryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCategoryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCategoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
