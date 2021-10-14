import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserHomeComponent } from './profile-user-home.component';

describe('ProfileUserHomeComponent', () => {
  let component: ProfileUserHomeComponent;
  let fixture: ComponentFixture<ProfileUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
