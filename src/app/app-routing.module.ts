import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER_PATH } from './shared/constants/router-path.constant';

const routes: Routes = [
  {
    path: ROUTER_PATH.patterns.path,
    loadChildren: () => import('./modules/patterns/patterns.module').then(m => m.PatternsModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
