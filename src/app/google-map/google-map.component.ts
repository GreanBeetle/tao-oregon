import { Component, OnInit, NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { TrailService } from '../trail.service'
import {Trail} from '../models/trail.model'
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
  providers: [ TrailService ]
})

export class GoogleMapComponent implements OnInit {

  trails: Trail[] = [];
  lat: number = 44.0582;
  lng: number = -121.3153;
  imagepath = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
  
  constructor(private trailService: TrailService) { }

  ngOnInit() {
    this.trailService.getTrails().subscribe( result => {
      for( let trail of result){
        this.trails.push(new Trail(trail));
      }
    });
  }

}
