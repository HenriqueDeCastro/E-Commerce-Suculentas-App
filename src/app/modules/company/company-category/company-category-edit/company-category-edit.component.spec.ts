import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCategoryEditComponent } from './company-category-edit.component';

describe('CompanyCategoryEditComponent', () => {
  let component: CompanyCategoryEditComponent;
  let fixture: ComponentFixture<CompanyCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
