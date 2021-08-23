import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralHealthIssuesService } from 'src/app/services/general-health-issues.service';
import { GeneralMedicalIssue } from 'src/app/Types/Types';

@Component({
  selector: 'app-add-general-issue',
  templateUrl: './add-general-issue.component.html',
  styleUrls: ['./add-general-issue.component.css'],
})
export class AddGeneralIssueComponent implements OnInit {
  @Output() issueAdded: EventEmitter<GeneralMedicalIssue> =
    new EventEmitter<GeneralMedicalIssue>();
  generalIssueForm = new FormGroup({
    issueName: new FormControl('', Validators.required),
  });

  constructor(private generalIssuesService: GeneralHealthIssuesService) {}

  ngOnInit(): void {}

  clearInput(): void {
    console.log(this.generalIssueForm);
    this.generalIssueForm.patchValue({
      issueName: '',
    });
  }

  addIssue() {
    this.generalIssuesService
      .addIssue(this.generalIssueForm.value)
      .subscribe((value) => {
        this.generalIssueForm.reset();
        this.generalIssueForm;
        this.issueAdded.emit(value);
      });
  }
}
