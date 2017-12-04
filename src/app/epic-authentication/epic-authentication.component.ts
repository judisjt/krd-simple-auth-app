import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-epic-authentication',
  templateUrl: './epic-authentication.component.html',
  styleUrls: ['./epic-authentication.component.css']
})
export class EpicAuthenticationComponent {
  checkConnect: any;
  goToAuthenticationWebsite(w, h) {
    const left = (screen.width / 2) - ( w / 2);
    const top = ( screen.height / 2 ) - ( h / 2 );
    const clientId = 'e4b32d61-d82e-4de0-b6ff-0f8f5f3ba887';
    const redirectUri = 'http://localhost:4200/afterlaunch';
    const baseUri = 'https://open-ic.epic.com/argonaut';
    const win = window.open(baseUri + '/oauth2/authorize?response_type=code&client_id=' + clientId + '&redirect_uri=' + redirectUri, '_blank', 'location=yes,height=' + h + ',width=' + w + ',top=' + top + ',left=' + left + 'scrollbars=yes,status=yes');
    this.checkConnect = window.setInterval(function() {
      if (win.document.URL.indexOf('code') !== -1) {
        window.clearInterval(this.checkConnect);
        const url = win.document.URL;
        win.opener.location.href = url;
        win.close();
      }
    }, 800);
  }
}
