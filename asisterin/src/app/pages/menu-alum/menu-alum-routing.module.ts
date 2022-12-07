import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAlumPage } from './menu-alum.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAlumPageRoutingModule {}
