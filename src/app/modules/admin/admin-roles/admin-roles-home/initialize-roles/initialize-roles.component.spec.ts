import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializeRolesComponent } from './initialize-roles.component';

describe('InitializeRolesComponent', () => {
  let component: InitializeRolesComponent;
  let fixture: ComponentFixture<InitializeRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitializeRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
