import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddressAddComponent } from './profile-address-add.component';

describe('ProfileAddressAddComponent', () => {
  let component: ProfileAddressAddComponent;
  let fixture: ComponentFixture<ProfileAddressAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAddressAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
