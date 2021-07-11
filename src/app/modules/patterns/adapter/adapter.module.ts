import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdapterComponent } from './adapter.component';

const routes: Routes = [
  {
    path: '',
    component: AdapterComponent,
  }
];

@NgModule({
  declarations: [
    AdapterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AdapterModule {
}
