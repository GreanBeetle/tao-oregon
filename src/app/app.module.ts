import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';

import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationService } from './authentication.service';
import { ListOfTrailsComponent } from './list-of-trails/list-of-trails.component';
import { TrailDetailComponent } from './trail-detail/trail-detail.component';
import { UserService } from './user.service';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { WriteReportComponent } from './write-report/write-report.component';
import { ReportService } from './report.service';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
}

@NgModule({
  declarations: [
    AppComponent,

    AuthComponent,
    WelcomeComponent,
    ListOfTrailsComponent,
    TrailDetailComponent,
    AirQualityComponent,
    WriteReportComponent,
    SearchPipe,
    SearchComponent,
    WeatherComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationService, UserService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
