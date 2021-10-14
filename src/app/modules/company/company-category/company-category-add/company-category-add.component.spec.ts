import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCategoryAddComponent } from './company-category-add.component';

describe('CompanyCategoryAddComponent', () => {
  let component: CompanyCategoryAddComponent;
  let fixture: ComponentFixture<CompanyCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
