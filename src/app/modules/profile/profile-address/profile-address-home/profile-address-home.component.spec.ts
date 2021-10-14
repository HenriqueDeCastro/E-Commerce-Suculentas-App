import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddressHomeComponent } from './profile-address-home.component';

describe('ProfileAddressHomeComponent', () => {
  let component: ProfileAddressHomeComponent;
  let fixture: ComponentFixture<ProfileAddressHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAddressHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddressHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
