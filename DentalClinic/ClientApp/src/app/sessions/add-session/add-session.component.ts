import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css'],
})
export class AddSessionComponent implements AfterContentInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngAfterContentInit(): void {
    this.activatedRoute.paramMap.subscribe((value) => {
      console.log(value.get('patientId'));
      this.sessionForm.patchValue({
        patientID: value.get('patientId'),
      });
    });
  }

  sessionForm = new FormGroup({
    description: new FormControl(''),
    amountToPay: new FormControl('', [Validators.required, Validators.min(0)]),
    amountPaid: new FormControl('', Validators.min(0)),
    date: new FormControl('', Validators.required),
    patientID: new FormControl(''),
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
      .addSession(this.sessionForm.value)
      .subscribe((value) => {
        this.router.navigate(['/', 'patients', value.patientID]);
      });
  }
}
