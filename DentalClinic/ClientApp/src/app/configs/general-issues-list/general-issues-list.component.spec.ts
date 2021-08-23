import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralIssuesListComponent } from './general-issues-list.component';

describe('GeneralIssuesListComponent', () => {
  let component: GeneralIssuesListComponent;
  let fixture: ComponentFixture<GeneralIssuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralIssuesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
