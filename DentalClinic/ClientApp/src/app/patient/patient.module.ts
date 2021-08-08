import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PatientRoutingModule } from './patient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

//Angular Material Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { PatientsHomeComponent } from './patients-home/patients-home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    AddPatientComponent,
    PatientsListComponent,
    PatientsHomeComponent,
    PatientDetailsComponent,
    EditPatientComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
  ],
})
export class PatientModule {}
