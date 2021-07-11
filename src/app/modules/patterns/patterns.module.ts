import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PatternComponent } from './pattern/pattern.component';
import { ROUTER_PATH } from '../../shared/constants/router-path.constant';


const routes: Routes = [
  {
    path: '',
    component: PatternComponent,
    children: [
      {
        path: ROUTER_PATH.patterns.factory.path,
        loadChildren: () => import('./factory/factory.module').then(m => m.FactoryModule),
      },
      {
        path: ROUTER_PATH.patterns.singleton.path,
        loadChildren: () => import('./singleton/singleton.module').then(m => m.SingletonModule),
      },
      {
        path: ROUTER_PATH.patterns.adapter.path,
        loadChildren: () => import('./adapter/adapter.module').then(m => m.AdapterModule),
        data: { title: ROUTER_PATH.patterns.adapter.title }
      },
      {
        path: ROUTER_PATH.patterns.observer.path,
        loadChildren: () => import('./observer/observer.module').then(m => m.ObserverModule),
        data: { title: ROUTER_PATH.patterns.observer.title }
      },
      {
        path: ROUTER_PATH.patterns.decorator.path,
        loadChildren: () => import('./decorator/decorator.module').then(m => m.DecoratorModule),
        data: { title: ROUTER_PATH.patterns.decorator.title }
      }
    ]
  }
];

@NgModule({
  declarations: [
    PatternComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PatternsModule {
}
