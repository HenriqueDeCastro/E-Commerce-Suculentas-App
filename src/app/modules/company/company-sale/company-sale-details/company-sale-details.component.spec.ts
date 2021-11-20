import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySaleDetailsComponent } from './company-sale-details.component';

describe('CompanySaleDetailsComponent', () => {
  let component: CompanySaleDetailsComponent;
  let fixture: ComponentFixture<CompanySaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySaleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
