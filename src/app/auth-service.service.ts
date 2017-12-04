/*
import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SmartAuthService {
  state: string;
  code: string;
  private sub: any;
  urlParams: any;

  // Session params
  tokenUri: string;
  clientId: string;
  secret: string;
  serviceUri: string;
  redirectUri: string;

  private accessToken: string;
  private patientId: string;

  constructor(private http: HttpClient) { }

  initialize(route: ActivatedRoute): void {
    this.sub = route.queryParams.subscribe(params => {
      this.urlParams = params;
    });

    // Get URL parameters from auth server
    this.state = this.getUrlParameter('state');
    this.code = this.getUrlParameter('code');

    // Load app parameters stored in session
    const sessionParams = JSON.parse(sessionStorage[this.state]);
    this.tokenUri = sessionParams.tokenUri;
    this.clientId = sessionParams.clientId;
    this.secret = sessionParams.secret;
    this.serviceUri = sessionParams.serviceUri;
    this.redirectUri = sessionParams.redirectUri;

    // Prep the token exchange call parameters
    const urlParams = new HttpParams()
      .set('code', this.code)
      .set('grant_type', 'authorization_code')
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
    if (!this.accessToken) {
      return Observable.throw('no access token available');
    }

    return this.http.get(
      this.serviceUri + '/Patient/' + this.patientId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
      }
    );
  }

  makeSmokingStatusCall(): Observable<any> {
    if (!this.accessToken) {
      return Observable.throw('no access token available');
    }

    return this.http.get(
      this.serviceUri + '/Observation?patient=' + this.patientId + '&code=72166-2', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
      }
    );
  }

  makeImmunizationsCall(): Observable<any> {
    if (!this.accessToken) {
      return Observable.throw('no access token available');
    }

    return this.http.get(
      this.serviceUri + '/Immunization?patient=' + this.patientId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
      }
    );
  }

  makeMedicationOrderCall(): Observable<any> {
    if (!this.accessToken) {
      return Observable.throw('no access token available');
    }

    return this.http.get(
      this.serviceUri + '/MedicationOrder?patient=' + this.patientId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
      }
    );
  }


  makeWeightCall(): Observable<any> {
    if (!this.accessToken) {
      return Observable.throw('no access token available');
    }

    return this.http.get(
      this.serviceUri + '/Observation/?patient=' + this.patientId + '&code=29463-7', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
      }
    );
  }
  makeConditionCall(): Observable<any> {
    if (!this.accessToken) {
      return Observable.throw('no access token available');
    }

    return this.http.get(
      this.serviceUri + '/Condition?patient=' + this.patientId, {
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
*/
