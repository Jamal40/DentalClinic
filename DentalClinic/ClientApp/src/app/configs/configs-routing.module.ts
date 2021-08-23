import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigsHomeComponent } from './configs-home/configs-home.component';

const routes: Routes = [
  {
    path: 'configurations',
    component: ConfigsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigsRoutingModule {}
