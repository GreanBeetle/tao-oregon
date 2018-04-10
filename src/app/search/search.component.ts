import { Component, OnInit } from '@angular/core';
import { Trail } from '../models/trail.model';
import { TrailService } from '../trail.service';
import { Router } from '@angular/router';
import { FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ TrailService ]
})
export class SearchComponent implements OnInit {
  params: Object = null;

  constructor(private trailService: TrailService) { }

  ngOnInit() {

  }


  searchTrails(params) {
    this.params = {
      name: params
    };
    console.log(params)
  }


}
