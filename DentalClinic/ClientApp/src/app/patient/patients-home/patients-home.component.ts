import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-home',
  templateUrl: './patients-home.component.html',
  styleUrls: ['./patients-home.component.css'],
})
export class PatientsHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToAddComponent() {
    this.router.navigate(['/', 'patients', 'add']);
  }
}
