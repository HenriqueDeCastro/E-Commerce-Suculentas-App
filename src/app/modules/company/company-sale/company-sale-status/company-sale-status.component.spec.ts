import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySaleStatusComponent } from './company-sale-status.component';

describe('CompanySaleStatusComponent', () => {
  let component: CompanySaleStatusComponent;
  let fixture: ComponentFixture<CompanySaleStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySaleStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySaleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
