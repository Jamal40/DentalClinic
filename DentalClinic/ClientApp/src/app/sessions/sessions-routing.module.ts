import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { AddTeethConditionComponent } from './add-teeth-condition/add-teeth-condition.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { ToothStatusInputComponent } from './tooth-status-input/tooth-status-input.component';

const routes: Routes = [
  { path: 'sessions/add/:patientId', component: AddSessionComponent },
  { path: 'sessions/edit/:sessionId', component: EditSessionComponent },
  { path: 'sessions/teeth', component: AddTeethConditionComponent },
  { path: 'sessions/test', component: ToothStatusInputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
