import { Component } from '@angular/core';

import { AddPlacePage } from '../add-place/add-place';
import { Place } from '../../models/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	addPlacePage = AddPlacePage;
	places: Place[] = [];

  constructor() {

  }

}
