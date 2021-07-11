import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FactoryComponent } from './factory.component';


const routes: Routes = [
  {
    path: '',
    component: FactoryComponent
  }
];

@NgModule({
  declarations: [
    FactoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
})

export class FactoryModule {
}
