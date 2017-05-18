import { Component } from '@angular/core';
import { IonicPage, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
	location: Location = {
		lat: 33.7748,
    lng: 84.2963
	};
	locationIsSet = false;
	imageUrl = '';

  constructor(private modealCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  onSubmit(form: NgForm) {

  }

  onOpenMap() {
  	const modal = this.modealCtrl.create(SetLocationPage,
  		{location: this.location});
  	modal.present();

  }

  onLocate() {

  }

  onTakePhoto() {

  }

}
