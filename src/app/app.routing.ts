import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListOfTrailsComponent } from './list-of-trails/list-of-trails.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'trails',
    component: ListOfTrailsComponent
  },

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
