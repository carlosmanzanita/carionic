import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanicoPage } from './panico.page';

const routes: Routes = [
  {
    path: '',
    component: PanicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanicoPageRoutingModule {}
