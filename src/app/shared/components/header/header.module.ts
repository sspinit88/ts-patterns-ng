import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const itemComponents: any[] = [
  HeaderComponent
];

@NgModule({
  declarations: [
    ...itemComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...itemComponents
  ]
})
export class HeaderModule {
}
