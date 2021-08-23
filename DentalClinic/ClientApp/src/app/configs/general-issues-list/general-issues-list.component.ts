import { Component, OnInit } from '@angular/core';
import { GeneralHealthIssuesService } from 'src/app/services/general-health-issues.service';
import { GeneralMedicalIssue } from 'src/app/Types/Types';

@Component({
  selector: 'app-general-issues-list',
  templateUrl: './general-issues-list.component.html',
  styleUrls: ['./general-issues-list.component.css'],
})
export class GeneralIssuesListComponent implements OnInit {
  generalHealthIssuesList: GeneralMedicalIssue[] = [];

  constructor(private generalIssuesService: GeneralHealthIssuesService) {}

  ngOnInit(): void {
    this.loadGeneralIssues();
  }

  loadGeneralIssues(): void {
    this.generalIssuesService.getAllIssues().subscribe((value) => {
      this.generalHealthIssuesList = value;
      console.log(value);
    });
  }

  deleteIssue(id: number): void {
    this.generalIssuesService.deleteIssue(id).subscribe((value) => {
      this.loadGeneralIssues();
    });
  }
  onIssueAdded(e: any) {
    this.loadGeneralIssues();
  }
}
