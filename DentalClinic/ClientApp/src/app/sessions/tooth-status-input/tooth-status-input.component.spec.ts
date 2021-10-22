import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothStatusInputComponent } from './tooth-status-input.component';

describe('ToothStatusInputComponent', () => {
  let component: ToothStatusInputComponent;
  let fixture: ComponentFixture<ToothStatusInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToothStatusInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothStatusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
