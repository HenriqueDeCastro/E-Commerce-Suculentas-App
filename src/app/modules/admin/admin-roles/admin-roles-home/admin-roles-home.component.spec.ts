import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesHomeComponent } from './admin-roles-home.component';

describe('AdminRolesHomeComponent', () => {
  let component: AdminRolesHomeComponent;
  let fixture: ComponentFixture<AdminRolesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRolesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
