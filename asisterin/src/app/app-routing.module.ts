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
    path: 'escaner',
    loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule)
  },
 
  {
    path: 'menu-alum',
    loadChildren: () => import('./pages/menu-alum/menu-alum.module').then( m => m.MenuAlumPageModule)
  },
  {
    path: 'menu-prof',
    loadChildren: () => import('./pages/menu-prof/menu-prof.module').then( m => m.MenuProfPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
