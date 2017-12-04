import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { EpicAuthenticationComponent } from './epic-authentication/epic-authentication.component';

const appRoutes: Routes = [
  {path: 'afterlaunch', component: LandingComponent},
  {path: 'authentication', component: EpicAuthenticationComponent},
  { path: '', redirectTo: '/authentication', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EpicAuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
