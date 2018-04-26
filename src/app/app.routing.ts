import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListOfTrailsComponent } from './list-of-trails/list-of-trails.component';
import { TrailDetailComponent } from './trail-detail/trail-detail.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { WriteReportComponent } from './write-report/write-report.component';

import { SearchComponent } from './search/search.component';



const appRoutes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {

    path: 'auth',
    component: AuthComponent
  },
  {

    path: 'trails',
    component: SearchComponent
  },
  {
    path: 'trails/:id',
    component: TrailDetailComponent
  },
  {
    path: 'report/:id',
    component: WriteReportComponent
  },
  {
    path: 'trails/:id/reportForm',
    component: WriteReportComponent
  },
  {
    path: 'user/:id',
    component: UserDashboardComponent
  }


]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
