import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalidadPiePage } from './modalidad-pie.page';

const routes: Routes = [
  {
    path: '',
    component: ModalidadPiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalidadPiePageRoutingModule {}
