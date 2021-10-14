import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromotionHomeComponent } from './admin-promotion-home.component';

describe('AdminPromotionHomeComponent', () => {
  let component: AdminPromotionHomeComponent;
  let fixture: ComponentFixture<AdminPromotionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPromotionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPromotionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
