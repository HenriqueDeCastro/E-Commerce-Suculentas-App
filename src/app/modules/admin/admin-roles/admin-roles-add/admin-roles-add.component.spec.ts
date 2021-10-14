import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesAddComponent } from './admin-roles-add.component';

describe('AdminRolesAddComponent', () => {
  let component: AdminRolesAddComponent;
  let fixture: ComponentFixture<AdminRolesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRolesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
