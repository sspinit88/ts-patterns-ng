import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecoratorComponent } from './decorator.component';

const routes: Routes = [
  {
    path: '',
    component: DecoratorComponent
  }
];

@NgModule({
  declarations: [
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DecoratorModule {
}
