import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './router/app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MetaphorsComponent } from './metaphors/metaphors.component';
import { AddConceptComponent } from './add-concept/add-concept.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DatamuseService } from './services/datamuse.service';
import { MadLibService } from './services/mad-lib.service';
import { ConceptService } from './services/concept.service';
import { SessionService } from './services/session.service';
import { HallOfFameService } from './services/hall-of-fame.service';
import { DisplayListService } from './services/display-list.service';
import { ExhaustionComponent } from './exhaustion/exhaustion.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { PopularPipe } from './pipes/popular.pipe';
import { HallOfFameDetailComponent } from './hall-of-fame-detail/hall-of-fame-detail.component';
import { AboutComponent } from './about/about.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MetaphorsComponent,
    AddConceptComponent,
    ExhaustionComponent,
    HallOfFameComponent,
    PopularPipe,
    HallOfFameDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [DatamuseService, ConceptService, SessionService, HallOfFameService, DisplayListService, MadLibService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
