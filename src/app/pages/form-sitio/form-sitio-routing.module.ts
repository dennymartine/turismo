import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSitioPage } from './form-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: FormSitioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSitioPageRoutingModule {}
