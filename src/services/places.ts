import { Injectable } from '@angular/core';	
import { Storage } from '@ionic/storage';

import { Place } from '../models/place';
import { Location } from '../models/location';

@Injectable()
export class PlacesService {
	private places: Place[] = [];

	constructor(private storage: Storage) {}

	addPlace(title: string, description: string,
		location: Location, imageUrl: string) {
		const place = new Place(title, description, location, imageUrl);
		this.places.push(place);
	
	}

	loadPlaces() {
		return this.places.slice();
	}

	deletePlace(index: number) {
		const place = this.places[index];
		this.places.splice(index, 1);
		
	}
}