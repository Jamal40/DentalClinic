import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Sister Modules
import { PatientModule } from './patient/patient.module';
import { SessionsModule } from './sessions/sessions.module';
import { ConfigsModule } from './configs/configs.module';

//Angular Material Components
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PatientModule,
    SessionsModule,
    ConfigsModule,
    MatListModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
