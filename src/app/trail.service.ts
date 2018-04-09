import { Injectable } from '@angular/core';
import { Trail } from './models/trail.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class TrailService {
trails: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.trails = database.list('trails');
  }

  getTrails() {
    return this.trails;
  }

  getTrailById(trailId: string) {
    return this.database.object('trails/' + trailId);
  }

  addTrail(theTrail: Trail) {
    this.trails.push(theTrail);
  }

  updateTrail(trailUpdated){
    var databaseEntryForTrail = this.getTrailById(trailUpdated.$key);
    databaseEntryForTrail.update({
      name: trailUpdated.name,
      report: trailUpdated.report
    });
  }

  deleteTrail(theTrailToDelete) {
    let theTrailToDeleteNow = this.getTrailById(theTrailToDelete.$key);
    theTrailToDeleteNow.remove();
  }

}
