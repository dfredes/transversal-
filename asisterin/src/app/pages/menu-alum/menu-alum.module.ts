import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAlumPageRoutingModule } from './menu-alum-routing.module';

import { MenuAlumPage } from './menu-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAlumPageRoutingModule
  ],
  declarations: [MenuAlumPage]
})
export class MenuAlumPageModule {}
