import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalidadesPageRoutingModule } from './modalidades-routing.module';

import { ModalidadesPage } from './modalidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalidadesPageRoutingModule
  ],
  declarations: [ModalidadesPage]
})
export class ModalidadesPageModule {}
