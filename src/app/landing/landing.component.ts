import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

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

  // Session params
  tokenUri: string;
  clientId: string;
  secret: any;
  serviceUri: string;
  redirectUri: string;
  data: any;
  options: any;
  postResponseJson: any;
  typeSecret: any;

  constructor(private route: ActivatedRoute, private _http: Http) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.urlParams = params;
    });

    // Get URL parameters from auth server
    this.state = this.getUrlParameter('state');
    this.code = this.getUrlParameter('code');

    // Load app parameters stored in session
    const params = JSON.parse(sessionStorage[this.state]);
    this.tokenUri = params.tokenUri;
    this.clientId = params.clientId;
    this.secret = params.secret;
    this.serviceUri = params.serviceUri;
    this.redirectUri = params.redirectUri;

    // Prep the token exchange call parameters
    this.data = {
      grant_type: 'authorization_code',
      code: this.code,
      redirect_uri: this.redirectUri,
      client_id: this.clientId
    };
   /* if (!this.secret) {
      this.data['client_id'] = this.clientId;
    }*/
    this.typeSecret = typeof this.secret;
    console.log(this.secret);
    this.options = {
      url: this.tokenUri,
      type: 'POST',
      data: this.data
    };
    /*if (this.secret) {
      this.options['headers'] = {
        'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.secret)
      };
    }*/
  }
  postRequest() {
    const body = `grant_type=authorization_code&code=XM13wz&redirect_uri=http://localhost:4200/afterlaunch&client_id=fc2c76f6-fe32-45d6-bfb2-d531dbb6fc68`;
    return this._http.post(this.tokenUri, body)
      .map((postResponse: Response) => postResponse.json())
      .subscribe(httpPostResponse => this.postResponseJson = httpPostResponse);
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
