import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalidadesPage } from './modalidades.page';

const routes: Routes = [
  {
    path: '',
    component: ModalidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalidadesPageRoutingModule {}
