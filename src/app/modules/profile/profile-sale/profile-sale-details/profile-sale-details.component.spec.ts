import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSaleDetailsComponent } from './profile-sale-details.component';

describe('ProfileSaleDetailsComponent', () => {
  let component: ProfileSaleDetailsComponent;
  let fixture: ComponentFixture<ProfileSaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSaleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
