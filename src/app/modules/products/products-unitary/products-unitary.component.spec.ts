import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUnitaryComponent } from './products-unitary.component';

describe('ProductsUnitaryComponent', () => {
  let component: ProductsUnitaryComponent;
  let fixture: ComponentFixture<ProductsUnitaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsUnitaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsUnitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
