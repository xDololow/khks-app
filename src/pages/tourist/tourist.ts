import { Component } from '@angular/core';
import { ModalController, NavController, NavParams} from 'ionic-angular';
import { HistoryTouristPage } from '../history-tourist/history-tourist';
import { RecreateTouristPage } from '../recreate-tourist/recreate-tourist';

@Component({
  selector: 'page-tourist',
  templateUrl: 'tourist.html',
})
export class TouristPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  openHistoryModal() {
    let landModal = this.modalCtrl.create(HistoryTouristPage);
    landModal.present();
  }
  openRecreateModal() {
    let landModal = this.modalCtrl.create(RecreateTouristPage);
    landModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TouristPage');
  }

}
