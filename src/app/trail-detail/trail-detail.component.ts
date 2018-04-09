import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrailService } from '../trail.service';
import { Trail } from '../models/trail.model';
import { Location } from '@angular/common';
import { FirebaseObjectObservable} from 'angularfire2/database';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css'],
  providers: [TrailService]
})
export class TrailDetailComponent implements OnInit {
  trailId: string;
  trailToDisplay;
  @ViewChild('googlemap') gmapElement: any;
  map: google.maps.Map;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trailService: TrailService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.trailId = urlParameters['id'];
      console.log(this.trailId)
    });
    this.trailService.getTrailById(this.trailId).subscribe( result => {
      this.trailToDisplay = result;
      var mapProp = {
        center: new google.maps.LatLng(this.trailToDisplay.latitude, this.trailToDisplay.longitude),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp)
    })
    // this.trailToDisplay = this.trailService.getTrailById(this.trailId);
    // console.log(this.trailToDisplay);
    // var mapProp = {
    //   center: new google.maps.LatLng(this.trailToDisplay.latitude, this.trailToDisplay.longitude),
    //   zoom: 10,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp)
  }

}
