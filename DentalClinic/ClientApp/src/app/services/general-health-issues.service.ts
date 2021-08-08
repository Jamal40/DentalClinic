import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralMedicalIssue } from '../Types/Types';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root',
})
export class GeneralHealthIssuesService {
  constructor(private client: HttpClient, private global: GlobalService) {}

  public getAllIssues(): Observable<GeneralMedicalIssue[]> {
    return this.client.get<GeneralMedicalIssue[]>(
      this.global.getBaseUrl() + 'GeneralMedicalIssues'
    );
  }
}
