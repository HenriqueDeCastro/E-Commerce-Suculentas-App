import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManualFreightComponent } from './company-manual-freight.component';

describe('CompanyManualFreightComponent', () => {
  let component: CompanyManualFreightComponent;
  let fixture: ComponentFixture<CompanyManualFreightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyManualFreightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManualFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
