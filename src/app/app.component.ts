import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { IndustrialPage } from '../pages/industrial/industrial';
import { ResourcePage } from '../pages/resource/resource';
import { AgriculturalPage } from '../pages/agricultural/agricultural';
import { TransportPage } from '../pages/transport/transport';
import { TouristPage } from '../pages/tourist/tourist';
import { EducationalPage } from '../pages/educational/educational';
import { HumanPage } from '../pages/human/human';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'О НАШЕМ РЕГИОНЕ', component: HomePage },
      { title: 'РЕСУРСНЫЙ ПОТЕНЦИАЛ', component: ResourcePage },
      { title: 'ПРОМЫШЛЕННЫЙ ПОТЕНЦИАЛ', component: IndustrialPage },
      { title: 'CЕЛЬСКО-ХОЗЯЙСТВЕННЫЙ ПОТЕНЦИАЛ', component: AgriculturalPage },
      { title: 'ТРАНСПОРТНО-ИНФРАСТРУКТУРНЫЙ ПОТЕНЦИАЛ', component: TransportPage },
      { title: 'ЭТНОКУЛЬТУРНЫЙ И ТУРИСТИЧЕСКИЙ ПОТЕНЦИАЛ', component: TouristPage },
      { title: 'НАУЧНО-ОБРАЗОВАТЕЛЬНЫЙ ПОТЕНЦИАЛ', component: EducationalPage },
      { title: 'ЧЕЛОВЕЧЕСКИЙ ПОТЕНЦИАЛ', component: HumanPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
