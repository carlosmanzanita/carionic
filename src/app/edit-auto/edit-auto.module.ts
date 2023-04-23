import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAutoPageRoutingModule } from './edit-auto-routing.module';

import { EditAutoPage } from './edit-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAutoPageRoutingModule
  ],
  declarations: [EditAutoPage]
})
export class EditAutoPageModule {}
