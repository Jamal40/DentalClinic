import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeethConditionComponent } from './add-teeth-condition.component';

describe('AddTeethConditionComponent', () => {
  let component: AddTeethConditionComponent;
  let fixture: ComponentFixture<AddTeethConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeethConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeethConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
