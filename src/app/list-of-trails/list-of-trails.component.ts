import { Component, OnInit } from '@angular/core';
import { Trail } from '../models/trail.model';
import { TrailService } from '../trail.service';
import { Router } from '@angular/router';
import { FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-list-of-trails',
  templateUrl: './list-of-trails.component.html',
  styleUrls: ['./list-of-trails.component.css'],
  providers: [TrailService]
})
export class ListOfTrailsComponent implements OnInit {
trails: FirebaseListObservable<any[]>
  constructor(private trailService: TrailService, private router: Router) { }

  ngOnInit() {
    this.trails = this.trailService.getTrails();
  }

  goToDetailPage(singleTrail) {
    this.router.navigate(['trails', singleTrail.$key]);
  }

  leaveReport(singleTrail) {
    this.router.navigate(['report', singleTrail.$key]);
  }


}
