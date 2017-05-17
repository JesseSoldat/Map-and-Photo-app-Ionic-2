import { Component } from '@angular/core';
import { IonicPage,  } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
	locationIsSet = false;
	imageUrl = '';

  constructor() {
  }

  ionViewDidLoad() {
  }

  onSubmit(form: NgForm) {

  }

  onOpenMap() {

  }

  onLocate() {

  }

  onTakePhoto() {

  }

}
