import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RailwayTransportPage } from '../railway-transport/railway-transport';
import { MotorTransportPage } from '../motor-transport/motor-transport';
import { AirTransportPage } from '../air-transport/air-transport';

@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {  }
  openRailwayModal() {
    let forestModal = this.modalCtrl.create(RailwayTransportPage);
    forestModal.present();
  }
  openMineralModal() {
    let mineModal = this.modalCtrl.create(MotorTransportPage);
    mineModal.present();
  }
  openWaterModal() {
    let waterModal = this.modalCtrl.create(AirTransportPage);
    waterModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportPage');
  }

}
