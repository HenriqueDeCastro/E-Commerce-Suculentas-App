import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDinamicComponent } from './list-dinamic.component';

describe('ListDinamicComponent', () => {
  let component: ListDinamicComponent;
  let fixture: ComponentFixture<ListDinamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDinamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
