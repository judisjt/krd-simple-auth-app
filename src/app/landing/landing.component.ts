import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/operator/map';
import {EpicoauthService} from '../epicoauth.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [EpicoauthService]
})
export class LandingComponent implements OnInit {

  ptName: string;
 /* patientGeneral: string;
  patientSmoking: string;
  patientConditions: string;
  patientImmunizations: string;
  patientMedicationOrder: string;
  patientWeight: string;
  patientAddress: any;*/
  constructor(private route: ActivatedRoute, private auth: EpicoauthService) {
  }

  ngOnInit() {
    this.auth.initialize(this.route);
  }

  // Get URL parameters from auth server

  getPatientName() {
    this.auth.makeGeneralPatientCall().subscribe(data => {
      // get pt name and store it in a variable
      this.ptName = data['name'][0].given.join(' ') + ' ' + data['name'][0].family.join(' ');
    });
  }

 /* getPatientGeneralInformation() {
    this.auth.makeGeneralPatientCall().subscribe(data => {
      // get pt name and store it in a variable
      this.patientGeneral = JSON.stringify(data);
    });
  }*/

  /*getSmokingStatus() {
    this.auth.makeSmokingStatusCall().subscribe(data => {
      // get pt name and store it in a variable
      this.patientSmoking = JSON.stringify(data);
    });
  }*/

  /*getImmunizations() {
    this.auth.makeImmunizationsCall().subscribe(data => {
      // get pt name and store it in a variable
      this.patientImmunizations = JSON.stringify(data);
    });
  }*/

 /* getMedicationOrder() {
    this.auth.makeMedicationOrderCall().subscribe(data => {
      // get pt name and store it in a variable
      this.patientMedicationOrder = JSON.stringify(data);
    });
  }*/

  /*getWeight() {
    this.auth.makeWeightCall().subscribe(data => {
      // get pt name and store it in a variable
      this.patientWeight = JSON.stringify(data);
    });
  }*/

  /*getConditions() {
    this.auth.makeConditionCall().subscribe(data => {
      // get pt name and store it in a variable
      this.patientConditions = JSON.stringify(data);
    });
  }*/
}
