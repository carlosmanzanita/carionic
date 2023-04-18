import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAutoPageRoutingModule } from './ver-auto-routing.module';

import { VerAutoPage } from './ver-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAutoPageRoutingModule
  ],
  declarations: [VerAutoPage]
})
export class VerAutoPageModule {}
