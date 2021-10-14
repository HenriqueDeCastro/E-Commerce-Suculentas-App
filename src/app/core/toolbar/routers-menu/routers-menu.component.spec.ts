import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutersMenuComponent } from './routers-menu.component';

describe('RoutersMenuComponent', () => {
  let component: RoutersMenuComponent;
  let fixture: ComponentFixture<RoutersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutersMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
