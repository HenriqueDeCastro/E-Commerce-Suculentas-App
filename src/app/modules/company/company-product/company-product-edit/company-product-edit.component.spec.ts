import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProductEditComponent } from './company-product-edit.component';

describe('CompanyProductEditComponent', () => {
  let component: CompanyProductEditComponent;
  let fixture: ComponentFixture<CompanyProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProductEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
