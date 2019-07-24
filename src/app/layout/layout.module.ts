import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
})
export class LayoutModule { }
