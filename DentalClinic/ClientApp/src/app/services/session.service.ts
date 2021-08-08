import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import {
  GeneralMedicalIssue,
  Patient,
  Session,
  TransmittedPatient,
} from '../Types/Types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private client: HttpClient, private global: GlobalService) {}
  baseUrl: string = this.global.getBaseUrl() + 'sessions';

  public addSession(addedSession: Session): Observable<Session> {
    return this.client.post<Session>(this.baseUrl, addedSession);
  }

  public getSession(sessionId: number): Observable<Session> {
    return this.client.get<Session>(`${this.baseUrl}/${sessionId}`);
  }

  public editSession(editedSession: Session) {
    return this.client.put(
      `${this.baseUrl}/${editedSession.sessionID}`,
      editedSession
    );
  }
}
