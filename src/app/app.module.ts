import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { GoogleMaps } from '@ionic-native/google-maps/ngx'
import { AgmMarker, MarkerManager, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';





/************************************************/

@NgModule({

  declarations: [AppComponent],

  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AgmDirectionModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    ViewChild,
    AgmMarker,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
