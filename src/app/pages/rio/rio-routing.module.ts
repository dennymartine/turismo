import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RioPage } from './rio.page';

const routes: Routes = [
  {
    path: '',
    component: RioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RioPageRoutingModule {}
