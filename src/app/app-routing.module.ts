import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'playa',
    loadChildren: () => import('./pages/playa/playa.module').then( m => m.PlayaPageModule)
  },
  {
    path: 'rio',
    loadChildren: () => import('./pages/rio/rio.module').then( m => m.RioPageModule)
  },
  {
    path: 'parque',
    loadChildren: () => import('./pages/parque/parque.module').then( m => m.ParquePageModule)
  },
  {
    path: 'menu-tabs',
    loadChildren: () => import('./pages/menu-tabs/menu-tabs.module').then( m => m.MenuTabsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
