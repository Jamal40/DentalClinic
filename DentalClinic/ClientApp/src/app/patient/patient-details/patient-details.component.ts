import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import { Session, TransmittedPatient } from 'src/app/Types/Types';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  constructor(
    private patientsService: PatientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  relatedPatientId: number;
  relatedPatient: TransmittedPatient;
  dataSource: Session[] = [];
  displayedColumns: string[] = [
    'amountToPay',
    'amountPaid',
    'date',
    'description',
    'actions',
  ];
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((value) => {
      this.relatedPatientId = Number(value.get('id'));

      this.patientsService
        .getPatient(this.relatedPatientId)
        .subscribe((value) => {
          this.relatedPatient = value;
          this.dataSource = this.relatedPatient.assignedSessions;
        });
    });
  }

  getAgeFromBirthDate(birthDateStr: Date) {
    const birthDate = new Date(birthDateStr);
    return Math.floor((Date.now() - birthDate.getTime()) / 31540000000);
  }
  goToAddSession(id: number) {
    this.router.navigate(['/', 'sessions', 'add', id]);
  }
  goToEdit(sessionId: number) {
    this.router.navigate(['/', 'sessions', 'edit', sessionId]);
  }
}
