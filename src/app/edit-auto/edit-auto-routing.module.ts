import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAutoPage } from './edit-auto.page';

const routes: Routes = [
  {
    path: '',
    component: EditAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAutoPageRoutingModule {}
