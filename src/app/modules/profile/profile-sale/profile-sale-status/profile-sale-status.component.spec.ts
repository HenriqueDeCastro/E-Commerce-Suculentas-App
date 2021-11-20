import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSaleStatusComponent } from './profile-sale-status.component';

describe('ProfileSaleStatusComponent', () => {
  let component: ProfileSaleStatusComponent;
  let fixture: ComponentFixture<ProfileSaleStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSaleStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSaleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
