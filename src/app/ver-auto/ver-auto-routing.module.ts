import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAutoPage } from './ver-auto.page';

const routes: Routes = [
  {
    path: '',
    component: VerAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAutoPageRoutingModule {}
