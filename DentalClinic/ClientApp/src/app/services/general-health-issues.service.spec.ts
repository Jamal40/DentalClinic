import { TestBed } from '@angular/core/testing';

import { GeneralHealthIssuesService } from './general-health-issues.service';

describe('GeneralHealthIssuesService', () => {
  let service: GeneralHealthIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralHealthIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
