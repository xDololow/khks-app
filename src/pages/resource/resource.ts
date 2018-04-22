import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LandResourcesPage } from '../land-resources/land-resources';
import { ForestResourcesPage } from '../forest-resources/forest-resources';
import { MineralResourcesPage } from '../mineral-resources/mineral-resources';
import { WaterResourcesPage } from '../water-resources/water-resources';

@Component({
  selector: 'page-resource',
  templateUrl: 'resource.html',
})
export class ResourcePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {  }
  openLandModal() {
    let landModal = this.modalCtrl.create(LandResourcesPage);
    landModal.present();
  }
  openForestModal() {
    let forestModal = this.modalCtrl.create(ForestResourcesPage);
    forestModal.present();
  }
  closeMineralModal() {
    let mineModal = this.modalCtrl.create(MineralResourcesPage);
    mineModal.present();
  }
  closeWaterModal() {
    let waterModal = this.modalCtrl.create(WaterResourcesPage);
    waterModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcePage');
  }

}
