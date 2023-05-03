import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalidadAventonPageRoutingModule } from './modalidad-aventon-routing.module';

import { ModalidadAventonPage } from './modalidad-aventon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalidadAventonPageRoutingModule
  ],
  declarations: [ModalidadAventonPage]
})
export class ModalidadAventonPageModule {}
