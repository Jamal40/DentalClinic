import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import {
  GeneralMedicalIssue,
  Patient,
  TransmittedPatient,
} from '../Types/Types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private client: HttpClient, private global: GlobalService) {}

  baseUrl: string = this.global.getBaseUrl() + 'Patients';

  public addPatient(
    newPatient: Patient,
    assignedGeneralHealthIssues: GeneralMedicalIssue[]
  ): Observable<TransmittedPatient> {
    const merged: TransmittedPatient = {
      patient: newPatient,
      assignedGeneralHealthIssues,
      assignedSessions: null,
    };
    return this.client.post<TransmittedPatient>(this.baseUrl, merged);
  }

  public getPatients(): Observable<Patient[]> {
    return this.client.get<Patient[]>(this.baseUrl);
  }

  public getPatient(id: number): Observable<TransmittedPatient> {
    return this.client.get<TransmittedPatient>(`${this.baseUrl}/${id}`);
  }

  public editPatient(
    id: number,
    editedPatient: Patient,
    assignedGeneralHealthIssues: GeneralMedicalIssue[]
  ) {
    const merged: TransmittedPatient = {
      patient: editedPatient,
      assignedGeneralHealthIssues,
      assignedSessions: null,
    };
    merged.patient.patientID = id;
    return this.client.put(`${this.baseUrl}/${id}`, merged);
  }
}
