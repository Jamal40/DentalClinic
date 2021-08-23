import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralMedicalIssue } from '../Types/Types';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root',
})
export class GeneralHealthIssuesService {
  baseUrl = this.global.getBaseUrl() + 'GeneralMedicalIssues';

  constructor(private client: HttpClient, private global: GlobalService) {}

  public getAllIssues(): Observable<GeneralMedicalIssue[]> {
    return this.client.get<GeneralMedicalIssue[]>(this.baseUrl);
  }

  public addIssue(
    newIssue: GeneralMedicalIssue
  ): Observable<GeneralMedicalIssue> {
    return this.client.post<GeneralMedicalIssue>(this.baseUrl, newIssue);
  }

  public deleteIssue(issueId: number): Observable<any> {
    return this.client.delete(`${this.baseUrl}/${issueId}`);
  }
}
