import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IndustrialPage } from '../pages/industrial/industrial';
import { ResourcePage } from '../pages/resource/resource';
import { AgriculturalPage } from '../pages/agricultural/agricultural';
import { TransportPage } from '../pages/transport/transport';
import { TouristPage } from '../pages/tourist/tourist';
import { EducationalPage } from '../pages/educational/educational';
import { HumanPage } from '../pages/human/human';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResourcePage,
    IndustrialPage,
    AgriculturalPage,
    TransportPage,
    TouristPage,
    EducationalPage,
    HumanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResourcePage,
    IndustrialPage,
    AgriculturalPage,
    TransportPage,
    TouristPage,
    EducationalPage,
    HumanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
