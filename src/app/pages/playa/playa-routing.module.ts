import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayaPage } from './playa.page';

const routes: Routes = [
  {
    path: '',
    component: PlayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayaPageRoutingModule {}
