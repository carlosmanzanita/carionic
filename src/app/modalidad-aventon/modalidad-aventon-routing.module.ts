import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalidadAventonPage } from './modalidad-aventon.page';

const routes: Routes = [
  {
    path: '',
    component: ModalidadAventonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalidadAventonPageRoutingModule {}
