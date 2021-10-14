import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProductHomeComponent } from './company-product-home.component';

describe('CompanyProductHomeComponent', () => {
  let component: CompanyProductHomeComponent;
  let fixture: ComponentFixture<CompanyProductHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProductHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
