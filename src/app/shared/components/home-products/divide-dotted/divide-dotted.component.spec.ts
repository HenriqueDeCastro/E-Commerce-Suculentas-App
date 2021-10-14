import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideDottedComponent } from './divide-dotted.component';

describe('DivideDottedComponent', () => {
  let component: DivideDottedComponent;
  let fixture: ComponentFixture<DivideDottedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivideDottedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideDottedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
