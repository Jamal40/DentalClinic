import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SessionsRoutingModule } from './sessions-routing.module';
import { AddSessionComponent } from './add-session/add-session.component';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { AddTeethConditionComponent } from './add-teeth-condition/add-teeth-condition.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ToothStatusInputComponent } from './tooth-status-input/tooth-status-input.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AddSessionComponent,
    EditSessionComponent,
    AddTeethConditionComponent,
    ToothStatusInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SessionsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
  ],
})
export class SessionsModule {}
