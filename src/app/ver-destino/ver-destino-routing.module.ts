import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDestinoPage } from './ver-destino.page';

const routes: Routes = [
  {
    path: '',
    component: VerDestinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDestinoPageRoutingModule {}
