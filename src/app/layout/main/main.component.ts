import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import {  takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';
@Component({
  selector: 'est-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public addUrl: string = null;
  public addText: string = null;

  public ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private router: Router, private changeDetector: ChangeDetectorRef) {

    this.router.events.pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(event => {
        if (event instanceof ActivationEnd && event.snapshot.routeConfig.path !== '') {
          this.addUrl = event.snapshot.data.addUrl;
          this.addText = event.snapshot.data.addText;
          this.changeDetector.detectChanges();
        }
      });
  }

  ngOnInit() {
  }

}
