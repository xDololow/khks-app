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
import { LandResourcesPage } from '../pages/land-resources/land-resources';
import { ForestResourcesPage } from '../pages/forest-resources/forest-resources';
import { MineralResourcesPage } from '../pages/mineral-resources/mineral-resources';
import { WaterResourcesPage } from '../pages/water-resources/water-resources';
import { EnergIndustrialPage } from '../pages/energ-industrial/energ-industrial';
import { MetalIndustrialPage } from '../pages/metal-industrial/metal-industrial';
import { CoalIndustrialPage } from '../pages/coal-industrial/coal-industrial';
import { FoodIndustrialPage } from '../pages/food-industrial/food-industrial';
import { RailwayTransportPage } from '../pages/railway-transport/railway-transport';
import { MotorTransportPage } from '../pages/motor-transport/motor-transport';
import { AirTransportPage } from '../pages/air-transport/air-transport';
import { HistoryTouristPage } from '../pages/history-tourist/history-tourist';
import { RecreateTouristPage } from '../pages/recreate-tourist/recreate-tourist';
import { ContactsPage } from '../pages/contacts/contacts';


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
    HumanPage,
    LandResourcesPage,
    ForestResourcesPage,
    MineralResourcesPage,
    WaterResourcesPage,
    EnergIndustrialPage,
    MetalIndustrialPage,
    CoalIndustrialPage,
    FoodIndustrialPage,
    RailwayTransportPage,
    MotorTransportPage,
    AirTransportPage,
    HistoryTouristPage,
    RecreateTouristPage,
    ContactsPage
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
    HumanPage,
    LandResourcesPage,
    ForestResourcesPage,
    MineralResourcesPage,
    WaterResourcesPage,
    EnergIndustrialPage,
    MetalIndustrialPage,
    CoalIndustrialPage,
    FoodIndustrialPage,
    RailwayTransportPage,
    MotorTransportPage,
    AirTransportPage,
    HistoryTouristPage,
    RecreateTouristPage,
    ContactsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
