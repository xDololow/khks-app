import { Component } from '@angular/core';
import { Loading, LoadingController, NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /*
  video: any = {
    url: 'https://www.youtube.com/embed/Ry5s8EuTYHA',
    title: 'Приглашаем в Хакасию! (КЭФ-2018)'
  };

  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;
  */
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer) {  }
  /*
  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    this.loading = this.loadingCtrl.create({
      content: 'Пожалуйста, подожите...'
    });
    this.loading.present();
  }

  handleIFrameLoadEvent(): void {
    this.loading.dismiss();
  }
  */
}
