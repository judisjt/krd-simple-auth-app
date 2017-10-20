import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  state: string;
  code: string;
  private sub: any;
  urlParams: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.urlParams = params;
    });

    this.state = this.getUrlParameter('state');
    this.code = this.getUrlParameter('code');
  }

  private getUrlParameter(sParam: string): string {
    if (isUndefined(this.urlParams[sParam])) {
      console.log('parameter ' + sParam + ' does not exist');
      return '';
    }
    return this.urlParams[sParam];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
