import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Location } from '../../models/location';

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
	location: Location;
	marker: Location;

  constructor(private navParams: NavParams, 
  					private viewCtrl: ViewController) {
  	this.location = this.navParams.get('location');
    if(this.navParams.get('isSet')) {
      this.marker = this.location;
    }
  }


  onSetMarker(event: any) {
    let { lat, lng } =  event.coords;
    this.marker = new Location(lat, lng)
    console.log(this.marker);
  }

  onConfirm() {

  }

  onAbort() {
  	this.viewCtrl.dismiss();
  }

}
