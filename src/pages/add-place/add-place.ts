import { Component } from '@angular/core';
import { IonicPage, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';

import { Geolocation } from '@ionic-native/geolocation';


@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
	location: Location = {
		lat: 33.774828,
    lng: -84.296312
	};
	locationIsSet = false;
	imageUrl = '';

  constructor(private modealCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private geolocation: Geolocation,) {
  }


  onSubmit(form: NgForm) {

  }

  onOpenMap() {
  	const modal = this.modealCtrl.create(SetLocationPage,
  		{location: this.location, isSet: this.locationIsSet});
  	modal.present();
    modal.onDidDismiss(data => {
      if(data) {
        this.location = data.location;
        this.locationIsSet = true;
      }
    });

  }

  onLocate() {
    const loader = this.loadingCtrl.create({
      content: 'Getting your Location...'
    });
    loader.present();
    this.geolocation.getCurrentPosition()
      .then(location => {
        loader.dismiss();
        console.log(location);
      })
      .catch(err => {
        console.log(err);
      })
  }

  onTakePhoto() {

  }

}
