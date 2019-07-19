import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'est-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {

    this.translateService.setDefaultLang('ro');
    this.translateService.use('ro');
  }


}
