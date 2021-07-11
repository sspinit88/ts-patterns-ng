import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { HeaderModule } from './shared/components/header/header.module';


const itemModules: any [] = [
  SidebarModule,
  HeaderModule,
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...itemModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
