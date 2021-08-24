import { Component, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css'],
})
export class EditSessionComponent implements AfterContentInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngAfterContentInit(): void {
    this.activatedRoute.paramMap.subscribe((value) => {
      console.log(value.get('sessionId'));
      this.sessionService
        .getSession(Number(value.get('sessionId')))
        .subscribe((value) => {
          this.sessionForm.patchValue(value);
        });
    });
  }

  sessionForm = new FormGroup({
    description: new FormControl(''),
    amountToPay: new FormControl('', [Validators.required, Validators.min(0)]),
    amountPaid: new FormControl('', Validators.min(0)),
    date: new FormControl('', Validators.required),
    patientID: new FormControl(''),
    sessionID: new FormControl(),
  });

  convertToUTC(event: MatDatepickerInputEvent<Date, String>) {
    const { value } = event;
    this.sessionForm.patchValue({
      date: new Date(
        Date.UTC(value.getFullYear(), value.getMonth(), value.getDate())
      ),
    });
  }

  submit() {
    console.log(this.sessionForm.value);
    this.sessionService
      .editSession(this.sessionForm.value)
      .subscribe((value) => {
        this.router.navigate([
          '/',
          'patients',
          this.sessionForm.value.patientID,
        ]);
      });
  }
}
