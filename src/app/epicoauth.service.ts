import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class EpicoauthService {
  code: string;
  private sub: any;
  urlParams: any;

  tokenUri: string;
  clientId: string;
  serviceUri: string;
  redirectUri: string;
  grant_type: string;
  codeINeed: string;
  accessToken: string;
  patientId: string;
  constructor(private http: HttpClient) {
  }

  initialize(route: ActivatedRoute): void {
    this.sub = route.queryParams.subscribe(params => {
      this.urlParams = params;
    });
    this.code = this.getUrlParameter('code');
    console.log(this.code);
    this.grant_type = 'authorization_code';
    this.redirectUri = 'http://localhost:4200/afterlaunch';
    this.clientId = 'e4b32d61-d82e-4de0-b6ff-0f8f5f3ba887';
    this.tokenUri = 'https://open-ic.epic.com/Argonaut/oauth2/token';

    const urlParams = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', this.code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId);
    this.http.post(this.tokenUri, urlParams).subscribe(
      res => {
        console.log('received data from server');
        this.accessToken = res['access_token'];
        this.patientId = res['patient'];
      }
    );
  }

  makeGeneralPatientCall(): Observable<any> {
    this.serviceUri = 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/';
    if (!this.accessToken) {
      return Observable.throw('no access token available');
    }

    return this.http.get(
      this.serviceUri + '/Patient/' + this.patientId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
      }
    );
  }

  private getUrlParameter(sParam: string): string {
    if (isUndefined(this.urlParams[sParam])) {
      console.log('parameter ' + sParam + ' does not exist');
      return '';
    }
    return this.urlParams[sParam];
  }
}
