import { Component, OnInit } from '@angular/core';
import { Trail } from '../models/trail.model';
import { TrailService } from '../trail.service';
import { Router } from '@angular/router';
import { FirebaseListObservable} from 'angularfire2/database';
import { GeoCodeApiService } from '../geo-code-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ TrailService, GeoCodeApiService ]
})
export class SearchComponent {
  params: Object = {
    name: "",
    userLocation: {lat: 44.0582, lng: -121.3153},
    maxDistance: 0,
    trailLength: 0
  };

  constructor(private trailService: TrailService, private geoCodeService: GeoCodeApiService) { }

  searchTrails(name, userLocation, maxDistance, trailLength) {
    if(userLocation != ""){
      this.geoCodeService.getLatLon(userLocation).subscribe( response => {
        this.params = {
          name: name,
          userLocation: response.json().results[0].geometry.location,
          maxDistance: maxDistance,
          trailLength: trailLength
        };

      });
    } else{
      this.params = {
        name: name,
        trailLength: trailLength,
        userLocation: userLocation,
        maxDistance: maxDistance
      };
    }
  }


}
