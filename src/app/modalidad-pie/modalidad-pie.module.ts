import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalidadPiePageRoutingModule } from './modalidad-pie-routing.module';

import { ModalidadPiePage } from './modalidad-pie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalidadPiePageRoutingModule
  ],
  declarations: [ModalidadPiePage]
})
export class ModalidadPiePageModule {}
