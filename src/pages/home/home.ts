import { Component, OnInit } from '@angular/core';

import { AddPlacePage } from '../add-place/add-place';
import { Place } from '../../models/place';
import { PlacesService } from '../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	addPlacePage = AddPlacePage;
	places: Place[] = [];

  constructor(private placesService: PlacesService) {

  }

  ngOnInit() {
  	
  };

  ionViewWillEnter() {
  	this.places = this.placesService.loadPlaces();
  }

}
