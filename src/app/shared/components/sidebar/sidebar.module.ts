import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

const itemComponents: any[] = [
  SidebarComponent,
];

@NgModule({
  declarations: [
    ...itemComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...itemComponents,
  ],
})
export class SidebarModule {
}
