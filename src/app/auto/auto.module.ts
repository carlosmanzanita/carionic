import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoPageRoutingModule } from './auto-routing.module';

import { AutoPage } from './auto.page';
// import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoPageRoutingModule,
  ],
  declarations: [AutoPage]
  
})
export class AutoPageModule {}
