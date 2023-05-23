import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicoPageRoutingModule } from './panico-routing.module';

import { PanicoPage } from './panico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicoPageRoutingModule
  ],
  declarations: [PanicoPage]
})
export class PanicoPageModule {}
