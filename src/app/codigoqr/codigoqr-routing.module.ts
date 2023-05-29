import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoqrPage } from './codigoqr.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoqrPageRoutingModule {}
