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
export class SearchComponent implements OnInit {
  params: Object = {};


  constructor(private trailService: TrailService, private geoCodeService: GeoCodeApiService) { }

  ngOnInit() {

  }

  getLatLon(location: any) {
    this.geoCodeService.getLatLon(location).subscribe(result =>{
      this.latLon = result.json();
      console.log(this.latLon);
      return latLon;
    })
  }

  searchTrails(name, userLocation, maxDistance, trailLength) {
    this.params = {
      name: name,
      userLocation: userLocation,
      maxDistance: maxDistance,
      trailLength: trailLength
    };
    console.log(this.params)
  }


}
