import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigsRoutingModule } from './configs-routing.module';
import { ConfigsHomeComponent } from './configs-home/configs-home.component';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { AddGeneralIssueComponent } from './add-general-issue/add-general-issue.component';
import { GeneralIssuesListComponent } from './general-issues-list/general-issues-list.component';

//Agnular Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ConfigsHomeComponent,
    AddGeneralIssueComponent,
    GeneralIssuesListComponent,
  ],
  imports: [
    CommonModule,
    ConfigsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class ConfigsModule {}
