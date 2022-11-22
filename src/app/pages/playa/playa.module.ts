import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayaPageRoutingModule } from './playa-routing.module';

import { PlayaPage } from './playa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayaPageRoutingModule
  ],
  declarations: [PlayaPage]
})
export class PlayaPageModule {}
