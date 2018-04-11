import { Injectable } from '@angular/core';
import { Report } from './models/report.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ReportService {
  reports: FirebaseListObservable<any[]>
  specificReports;

  constructor(private database: AngularFireDatabase) {
    this.reports = database.list('reports');
  }

  getReports(){
    return this.reports;
  }

  addReport(theReport: Report) {
    this.reports.push(theReport);
    console.log(theReport);
  }

  displayReports(resuls, theTrailId) {
    let specificReportsHere = [];
    resuls.forEach(function(object) {
      if(object.trailId == theTrailId.$key) {
        specificReportsHere.push(object.reportContent);
      }
    })
    console.log('result from service', specificReportsHere);
    return specificReportsHere;
  }



}


//
//   getTrailById(trailId: string) {
//     return this.database.object('trails/' + trailId);
//   }
//
//   addTrail(theTrail: Trail) {
//     this.trails.push(theTrail);
//   }
//
//   updateTrail(trailUpdated){
//     var databaseEntryForTrail = this.getTrailById(trailUpdated.$key);
//     databaseEntryForTrail.update({
//       name: trailUpdated.name,
//       report: trailUpdated.report
//     });
//   }
//
//   deleteTrail(theTrailToDelete) {
//     let theTrailToDeleteNow = this.getTrailById(theTrailToDelete.$key);
//     theTrailToDeleteNow.remove();
//   }
//
// }
//
