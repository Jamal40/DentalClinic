import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-general-issue',
  templateUrl: './add-general-issue.component.html',
  styleUrls: ['./add-general-issue.component.css'],
})
export class AddGeneralIssueComponent implements OnInit {
  generalIssueForm = new FormGroup({
    issueName: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  clearInput(): void {
    console.log(this.generalIssueForm);
    this.generalIssueForm.patchValue({
      issueName: '',
    });
  }
}
