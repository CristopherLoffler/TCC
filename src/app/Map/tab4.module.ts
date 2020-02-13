import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

/*************************************************/
import { AgmCoreModule } from '@agm/core';


/********************************************** */

import { IonicModule } from '@ionic/angular';

import { Tab4Page } from './tab4.page';
import { AgmDirectionModule } from 'agm-direction';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBJ8FMb6NDUh4sqVkjm1DTR82M-t9BhEY'
    }) ,
    AgmDirectionModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
