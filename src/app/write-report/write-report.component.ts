import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable} from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import { Report } from '../models/report.model';
import { ReportService } from '../report.service'


@Component({
  selector: 'app-write-report',
  templateUrl: './write-report.component.html',
  styleUrls: ['./write-report.component.css'],
  providers: [AuthenticationService, ReportService]
})
export class WriteReportComponent implements OnInit {
  trailId: string;
  userId: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public authService: AuthenticationService,
    private reportService: ReportService
  ) {
    this.authService.user.subscribe(theUser => {
      this.userId = theUser.uid;
      console.log("HERE IS THE USER ID: " + this.userId);
    });
   }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.trailId = urlParameters['id'];
      console.log("HERE IS YOUR TRAIL ID: " + this.trailId);
    });
  }

  makeReport(text) {
    console.log("YOUR TEXT IS: " + text);
    let newReport = new Report(this.userId, this.trailId, text);
    // console.log("UID: " + newReport.userId + "TRAIL ID: " + newReport.trailId + "REPORT CONTENT: " + newReport.reportContent)
    this.reportService.addReport(newReport);
  }


}
