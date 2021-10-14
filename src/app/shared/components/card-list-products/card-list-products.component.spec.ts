import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListProductsComponent } from './card-list-products.component';

describe('CardListProductsComponent', () => {
  let component: CardListProductsComponent;
  let fixture: ComponentFixture<CardListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
