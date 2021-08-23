import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  ngAfterContentChecked() {
    this.activeLink = this.router.url;
  }

  title = 'ClientApp';
  activeLink: string = this.router.url;
  theme: ThemePalette = 'warn';
  links: { name: string; path: string }[] = [
    { name: 'Patients', path: '/patients' },
    { name: 'Configurations', path: '/configurations' },
  ];
}
