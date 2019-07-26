import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => { return new TranslateHttpLoader(http, './assets/i18n/', '.json')},
          deps: [HttpClient]
        }
      }
    )
  ],
  exports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class SharedModule { }
