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
  id: number;
  params: any;
  dynId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      // this.id = +params['id'];
      // console.log(params['id']);
      this.params = params;
    });

    this.dynId = this.getUrlParameter('id');
    this.state = this.getUrlParameter('state');
    this.code = this.getUrlParameter('code');
  }

  private getUrlParameter(sParam: string): string {
    if (isUndefined(this.params[sParam])) {
      console.log('parameter ' + sParam + ' does not exist');
      return '';
    }
    return this.params[sParam];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
