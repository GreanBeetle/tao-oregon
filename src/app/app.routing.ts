import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListOfTrailsComponent } from './list-of-trails/list-of-trails.component';

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
    component: ListOfTrailsComponent
  }


]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
