import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientsHomeComponent } from './patients-home/patients-home.component';

const routes: Routes = [
  { path: 'patients', component: PatientsHomeComponent },
  {
    path: 'patients/add',
    component: AddPatientComponent,
  },
  {
    path: 'patients/edit/:id',
    component: EditPatientComponent,
  },
  {
    path: 'patients/:id',
    component: PatientDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
