import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TrailService } from '../trail.service';
import { Trail } from '../models/trail.model';
import { Location } from '@angular/common';
import { FirebaseObjectObservable} from 'angularfire2/database';
@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css'],
  providers: [TrailService]
})
export class TrailDetailComponent implements OnInit {
  trailId: string;
  trailToDisplay: FirebaseObjectObservable<any>;

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
    this.trailToDisplay = this.trailService.getTrailById(this.trailId);
    console.log(this.trailToDisplay);
  }

}
