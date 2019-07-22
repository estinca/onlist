import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    SharedModule

  ],
})
export class LayoutModule { }
