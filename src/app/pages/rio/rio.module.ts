import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RioPageRoutingModule } from './rio-routing.module';

import { RioPage } from './rio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RioPageRoutingModule
  ],
  declarations: [RioPage]
})
export class RioPageModule {}
