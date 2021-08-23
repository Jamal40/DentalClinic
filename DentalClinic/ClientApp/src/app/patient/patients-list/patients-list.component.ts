import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Patient } from 'src/app/Types/Types';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'patient-name',
    'patient-birthDate',
    'patient-nationalId',
    'patient-phone',
    'patient-actions',
  ];
  dataSource: MatTableDataSource<Patient>;

  constructor(
    private router: Router,
    private patientsService: PatientsService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.fillTabelFromDatabase();
  }

  fillTabelFromDatabase() {
    this.patientsService.getPatients().subscribe((value) => {
      this.dataSource = new MatTableDataSource<Patient>(value);
      this.dataSource.paginator = this.paginator;
    });
  }

  getAgeFromBirthDate(birthDateStr: string) {
    const birthDate = new Date(birthDateStr);
    return Math.floor((Date.now() - birthDate.getTime()) / 31540000000);
  }
  goToDetails(id: number) {
    this.router.navigate(['/', 'patients', id]);
  }
  goToEdit(id: number) {
    this.router.navigate(['/', 'patients', 'edit', id]);
  }
  delete(id: number) {
    this.patientsService.deletePatient(id).subscribe((value) => {
      this.fillTabelFromDatabase();
    });
  }
}
