import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SingletonComponent } from './singleton.component';

const routes: Routes = [
  {
    path: '',
    component: SingletonComponent,
  }
];

@NgModule({
  declarations: [
    SingletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class SingletonModule {
}
