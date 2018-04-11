import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrailService } from '../trail.service';
import { Trail } from '../models/trail.model';
import { Location } from '@angular/common';
import { FirebaseObjectObservable} from 'angularfire2/database';
import { ViewChild } from '@angular/core';
import { ReportService  } from '../report.service'
import { } from '@types/googlemaps';


@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css'],
  providers: [TrailService, ReportService]
})
export class TrailDetailComponent implements OnInit {
  trailId: string;
  latLng: string[] = null;
  trailToDisplay;
  reportsToDisplay;
  specificReportsToDisplay;
  @ViewChild('googlemap') gmapElement: any;
  map: google.maps.Map;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trailService: TrailService,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.trailId = urlParameters['id'];
    });
    this.trailService.getTrailById(this.trailId).subscribe( result => {
      this.trailToDisplay = result;
      this.latLng = [this.trailToDisplay.latitude, this.trailToDisplay.longitude];
      var mapProp = {
        center: new google.maps.LatLng(this.trailToDisplay.latitude, this.trailToDisplay.longitude),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      var marker = new google.maps.Marker({
        position: {lat: this.trailToDisplay.latitude, lng: this.trailToDisplay.longitude},
        map: this.map,
        title: 'Hello World!'
      });
    })
    this.reportService.getReports().subscribe(results => {
      this.reportsToDisplay = results;
      this.specificReportsToDisplay =  this.reportService.displayReports(this.reportsToDisplay, this.trailToDisplay);
    });
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
