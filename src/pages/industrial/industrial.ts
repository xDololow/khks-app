import { Component } from '@angular/core';
import { ModalController, NavController, NavParams} from 'ionic-angular';
import { EnergIndustrialPage } from '../energ-industrial/energ-industrial';
import { MetalIndustrialPage } from '../metal-industrial/metal-industrial';
import { CoalIndustrialPage } from '../coal-industrial/coal-industrial';
import { FoodIndustrialPage } from '../food-industrial/food-industrial';

@Component({
  selector: 'page-industrial',
  templateUrl: 'industrial.html',
})
export class IndustrialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {  }

  openEnergModal() {
    let energModal = this.modalCtrl.create(EnergIndustrialPage);
    energModal.present();
  }
  openMetalModal() {
    let metalModal = this.modalCtrl.create(MetalIndustrialPage);
    metalModal.present();
  }
  closeCoalModal() {
    let coalModal = this.modalCtrl.create(CoalIndustrialPage);
    coalModal.present();
  }
  closeFoodModal() {
    let foodModal = this.modalCtrl.create(FoodIndustrialPage);
    foodModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IndustrialPage');
  }

}
