import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderbyComponent } from './list-orderby.component';

describe('ListOrderbyComponent', () => {
  let component: ListOrderbyComponent;
  let fixture: ComponentFixture<ListOrderbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
