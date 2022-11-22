import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTabsPage } from './menu-tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu-tabs/playa',
    pathMatch: 'full'
  },{
    path: '',
    component: MenuTabsPage,
    children: [
      {
        path: 'parque',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../parque/parque.module').then(m => m.ParquePageModule)
          }
        ]
      },
      {
        path: 'playa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../playa/playa.module').then(m => m.PlayaPageModule)
          }
        ]
      },
      {
        path: 'rio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../rio/rio.module').then(m => m.RioPageModule)
          }
        ]
      },
      {
        path: 'about-us',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about-us/about-us.module').then(m => m.AboutUsPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabsPageRoutingModule {}
