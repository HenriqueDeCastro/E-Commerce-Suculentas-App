import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromotionAddComponent } from './admin-promotion-add.component';

describe('AdminPromotionAddComponent', () => {
  let component: AdminPromotionAddComponent;
  let fixture: ComponentFixture<AdminPromotionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPromotionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPromotionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
