import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule
  ],
})
export class LayoutModule { }
