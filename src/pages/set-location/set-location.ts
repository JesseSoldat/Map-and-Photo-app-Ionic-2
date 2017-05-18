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
  }

  ionViewDidLoad() {
   
  }

}
