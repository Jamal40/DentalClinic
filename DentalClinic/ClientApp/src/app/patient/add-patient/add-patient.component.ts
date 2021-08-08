import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { GeneralHealthIssuesService } from 'src/app/services/general-health-issues.service';
import { PatientsService } from 'src/app/services/patients.service';
import { GeneralMedicalIssue } from '../../Types/Types';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  constructor(
    private generalHealthIssueService: GeneralHealthIssuesService,
    private patientsService: PatientsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.generalHealthIssueService.getAllIssues().subscribe((value) => {
      this.generalHealthIssues = value;
      console.log(this.generalHealthIssues);
    });
  }

  patientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    secondName: new FormControl(''),
    familyName: new FormControl(''),
    nationalID: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01(1|2|0|5)[0-9]{8}$/g),
    ]),
    birthDate: new FormControl('', Validators.required),
    notes: new FormControl(''),
  });

  nationalIdBirthDate: Date;
  generalHealthIssues: GeneralMedicalIssue[];
  assignedGeneralHealthIssuesIDs: GeneralMedicalIssue[] = [];

  extractBirthDate(nationalNumber) {
    let checkEgyptianNationalNumber = new RegExp(
      /^(2|3)([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-2])[0-9]{7}$/
    );

    let matches = nationalNumber.match(checkEgyptianNationalNumber);

    if (matches) {
      let year = (matches[1] === '2' ? 1900 : 2000) + Number(matches[2]);
      let month = Number(matches[3]) - 1;
      let day = Number(matches[4]);
      this.nationalIdBirthDate = new Date(Date.UTC(year, month, day));

      this.patientForm.patchValue({
        birthDate: this.nationalIdBirthDate,
      });

      console.log(this.patientForm.value);
    }
  }

  convertToUTC(event: MatDatepickerInputEvent<Date, String>) {
    const { value } = event;
    this.patientForm.patchValue({
      birthDate: new Date(
        Date.UTC(value.getFullYear(), value.getMonth(), value.getDate())
      ),
    });
  }

  checkBoxChanged(checkedEvent: MatCheckboxChange) {
    if (checkedEvent.checked) {
      this.assignedGeneralHealthIssuesIDs.push({
        issueID: Number(checkedEvent.source.value),
        issueName: '',
      });
    } else {
      this.assignedGeneralHealthIssuesIDs =
        this.assignedGeneralHealthIssuesIDs.filter(
          (issue) => issue.issueID !== Number(checkedEvent.source.value)
        );
    }
    console.log(this.assignedGeneralHealthIssuesIDs);
  }

  submit(): void {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      this.patientsService
        .addPatient(this.patientForm.value, this.assignedGeneralHealthIssuesIDs)
        .subscribe((value) => {
          this.router.navigate(['/', 'patients']);
        });
    }
  }
}
