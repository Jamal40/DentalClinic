import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';

const routes: Routes = [
  { path: 'sessions/add/:patientId', component: AddSessionComponent },
  { path: 'sessions/edit/:sessionId', component: EditSessionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
