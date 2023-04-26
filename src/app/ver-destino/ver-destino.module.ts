import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDestinoPageRoutingModule } from './ver-destino-routing.module';

import { VerDestinoPage } from './ver-destino.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDestinoPageRoutingModule
  ],
  declarations: [VerDestinoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class VerDestinoPageModule {}
