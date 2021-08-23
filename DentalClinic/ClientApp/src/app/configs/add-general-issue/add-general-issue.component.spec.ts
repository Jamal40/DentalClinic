import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeneralIssueComponent } from './add-general-issue.component';

describe('AddGeneralIssueComponent', () => {
  let component: AddGeneralIssueComponent;
  let fixture: ComponentFixture<AddGeneralIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGeneralIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeneralIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
