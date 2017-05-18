import { Component } from '@angular/core';
import { IonicPage, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';
import { PlacesService } from '../../services/places';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

declare var cordova: any;

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
	imageUrl: string = '';

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private geolocation: Geolocation,
              private camera: Camera,
              private file: File,
              private placesService: PlacesService) {
  }


  onSubmit(form: NgForm) {
    this.placesService
      .addPlace(form.value.title, form.value.description, 
        this.location, this.imageUrl);
      form.reset();
      this.location = {
        lat: 33.774828,
        lng: -84.296312 
      };
      this.imageUrl = '';
      this.locationIsSet = false;
  }

  onOpenMap() {
  	const modal = this.modalCtrl.create(SetLocationPage,
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
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.locationIsSet = true;
      })
      .catch(err => {
        loader.dismiss();
        const toast = this.toastCtrl.create({
          message: 'Couldn\'t get the location, please pick it manually!',
          duration: 2500
        });
        toast.present();
      })
  }

  onTakePhoto() {

    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.imageUrl = "data:image/jpeg;base64," + imageData;
     
    }, (err) => {
        console.log(err);
    });
   }
  


}
