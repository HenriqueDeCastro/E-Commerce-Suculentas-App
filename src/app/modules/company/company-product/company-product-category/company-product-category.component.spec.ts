import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProductCategoryComponent } from './company-product-category.component';

describe('CompanyProductCategoryComponent', () => {
  let component: CompanyProductCategoryComponent;
  let fixture: ComponentFixture<CompanyProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProductCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
