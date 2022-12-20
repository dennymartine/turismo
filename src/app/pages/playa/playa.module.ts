import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayaPageRoutingModule } from './playa-routing.module';

import { PlayaPage } from './playa.page';
import { ListPlayaComponent } from './list-playa/list-playa.component';
import { ItemPlayaComponent } from './item-playa/item-playa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayaPageRoutingModule
  ],
  declarations: [PlayaPage, ListPlayaComponent, ItemPlayaComponent]
})
export class PlayaPageModule {}
