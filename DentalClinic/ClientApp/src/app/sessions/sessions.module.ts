import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [AddSessionComponent, EditSessionComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class SessionsModule {}
