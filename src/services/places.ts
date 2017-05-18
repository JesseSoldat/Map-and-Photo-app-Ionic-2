import { Injectable } from '@angular/core';	
import { Storage } from '@ionic/storage';

import { Place } from '../models/place';
import { Location } from '../models/location';
import { File } from '@ionic-native/file';


declare var cordova: any;

@Injectable()
export class PlacesService {
	private places: Place[] = [];

	constructor(private storage: Storage,
							private file: File) {}

	addPlace(title: string, description: string,
		location: Location, imageUrl: string) {
		const place = new Place(title, description, location, imageUrl);
		this.places.push(place);

		this.storage.set('places', this.places)
			.then(() => console.log('saved to storage'))
			.catch((err) => {
				this.places.splice(this.places.indexOf(place), 1);
			})
	
	}

	loadPlaces() {
		return this.places.slice();
	}

	fetchPlaces() {
		return this.storage.get('places')
			.then((places: Place[]) => {
				console.log('fetching places from storage');
				this.places = places != null ? places : [];
				return this.places;
			})
			.catch(err => console.log(err));
	}

	deletePlace(index: number) {
		const place = this.places[index];
		this.places.splice(index, 1);
		this.storage.set('places', this.places)
			.then(() => {
				this.removeFile(place);
				//remove the image
			})
			.catch(err => console.log(err));

	}

	private removeFile(place: Place) {
		console.log('remove file');
		console.log(place);
		//replace the file path with a blank string
    const currentName = place.imageUrl.replace(/^.*[\\\/]/, '');


	}
}