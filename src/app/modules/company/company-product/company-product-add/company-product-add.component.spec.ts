import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProductAddComponent } from './company-product-add.component';

describe('CompanyProductAddComponent', () => {
  let component: CompanyProductAddComponent;
  let fixture: ComponentFixture<CompanyProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProductAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
